import newsApi from "@/services/newsApi";
import toast from "@/lib/toast";

/**
 * Stable empty-list reference.
 *
 * `query.data?.data || []` built a NEW array on every render whenever the
 * request was loading or failed. Any useEffect depending on that value then
 * re-ran on every render — on NewsPage that meant setState → render → setState,
 * an infinite loop that froze React ("Maximum update depth exceeded") and left
 * the whole app unable to render another route until a full page reload.
 */
const EMPTY = Object.freeze([]);
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const useNews = {
  /**
   * 📂 GET ALL POSTS HOOK
   * Fetches the complete list of news posts from server
   * Perfect for news feeds, blog listings, social media timelines
   * Returns: isLoadingPosts, posts, errorPosts
   * Example: const { isLoadingPosts, posts } = useNews.useAll();
   */
  useAll: (options = {}) => {
    const query = useQuery({
      queryKey: ["posts"],
      queryFn: newsApi.getAll,
      staleTime: 2 * 60 * 1000, // 2 minutes - news updates frequently
      cacheTime: 5 * 60 * 1000, // Keep in cache for 5 minutes
      ...options,
    });

    return {
      isLoadingPosts: query.isLoading,
      posts: query.data?.data ?? EMPTY,
      errorPosts: query.error,
      isErrorPosts: query.isError,
      refetchPosts: query.refetch,
    };
  },

  /**
   * 🎯 GET SINGLE POST HOOK
   * Fetches details of one specific post using its ID
   * Great for post detail pages, edit forms, showing post info
   * Returns: isLoadingPost, post, errorPost
   * Example: const { isLoadingPost, post } = useNews.useById(5);
   */
  useById: (id, options = {}) => {
    const query = useQuery({
      queryKey: ["posts", id],
      queryFn: () => newsApi.getById(id),
      enabled: !!id, // Only run if ID exists
      staleTime: 5 * 60 * 1000,
      ...options,
    });

    return {
      isLoadingPost: query.isLoading,
      post: query.data?.data,
      errorPost: query.error,
      isErrorPost: query.isError,
      refetchPost: query.refetch,
    };
  },

  /**
   * 💬 GET COMMENTS HOOK
   * Fetches comments for a specific post
   * Returns: isLoadingComments, comments, errorComments
   * Example: const { isLoadingComments, comments } = useNews.useComments(postId);
   */
  useComments: (postId, options = {}) => {
    const query = useQuery({
      queryKey: ["comments", postId],
      queryFn: () => newsApi.getComments(postId),
      enabled: !!postId,
      staleTime: 1 * 60 * 1000, // 1 minute - comments change often
      ...options,
    });

    return {
      isLoadingComments: query.isLoading,
      comments: query.data?.data ?? EMPTY,
      errorComments: query.error,
      isErrorComments: query.isError,
      refetchComments: query.refetch,
    };
  },

  /**
   * ➕ ADD COMMENT HOOK
   * Handles adding a new comment to a post
   * Automatically refreshes the comments list after successful creation
   * Returns: isPendingComment, addComment, errorAddComment
   * Example: const { isPendingComment, addComment } = useNews.useAddComment(postId, {
   *            onSuccess: () => { resetForm(); }
   *          });
   */
  useAddComment: (postId, options = {}) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
      mutationFn: (commentData) => newsApi.addComment(postId, commentData),
      onSuccess: (data) => {
        // Built-in functionality - always runs first
        queryClient.invalidateQueries({ queryKey: ["comments", postId] });
        queryClient.invalidateQueries({ queryKey: ["posts"] }); // Update post comment count
        toast.success("✅ Comment added successfully!");

        // Your custom logic runs after
        if (options.onSuccess) {
          options.onSuccess(data);
        }
      },
      onError: (error) => {
        toast.error(`❌ Failed to add comment: ${error.message}`);

        if (options.onError) {
          options.onError(error);
        }
      },
      ...Object.fromEntries(
        Object.entries(options).filter(
          ([key]) => !["onSuccess", "onError"].includes(key)
        )
      ),
    });

    return {
      isPendingComment: mutation.isPending,
      addComment: mutation.mutate,
      errorAddComment: mutation.error,
      isErrorAddComment: mutation.isError,
      resetAddComment: mutation.reset,
    };
  },

  /**
   * ❤️ TOGGLE LIKE HOOK
   * Handles liking/unliking posts
   * Updates post like count automatically
   * Returns: isPendingLike, toggleLike, errorToggleLike
   * Example: const { isPendingLike, toggleLike } = useNews.useToggleLike();
   */
  useToggleLike: (options = {}) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
      mutationFn: newsApi.toggleLike,
      onSuccess: (data, postId) => {
        // Built-in functionality
        queryClient.invalidateQueries({ queryKey: ["posts", postId] });
        queryClient.invalidateQueries({ queryKey: ["posts"] });
        toast.success("❤️ Like updated!");

        // Your custom logic
        if (options.onSuccess) {
          options.onSuccess(data, postId);
        }
      },
      onError: (error) => {
        toast.error(`❌ Failed to update like: ${error.message}`);

        if (options.onError) {
          options.onError(error);
        }
      },
      ...Object.fromEntries(
        Object.entries(options).filter(
          ([key]) => !["onSuccess", "onError"].includes(key)
        )
      ),
    });

    return {
      isPendingLike: mutation.isPending,
      toggleLike: mutation.mutate,
      errorToggleLike: mutation.error,
      isErrorToggleLike: mutation.isError,
      resetToggleLike: mutation.reset,
    };
  },

  /**
   * 📤 SHARE POST HOOK
   * Handles post sharing functionality
   * Returns: isPendingShare, sharePost, errorSharePost
   * Example: const { isPendingShare, sharePost } = useNews.useSharePost();
   */
  useSharePost: (options = {}) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
      mutationFn: newsApi.sharePost,
      onSuccess: (data, postId) => {
        // Built-in functionality
        queryClient.invalidateQueries({ queryKey: ["posts"] });
        toast.success("📤 Post shared successfully!");

        // Copy to clipboard functionality
        const shareUrl = `${window.location.origin}/news?id=${postId}`;
        navigator.clipboard.writeText(shareUrl);
        toast.success("🔗 Link copied to clipboard!");

        // Your custom logic
        if (options.onSuccess) {
          options.onSuccess(data, postId);
        }
      },
      onError: (error) => {
        toast.error(`❌ Failed to share post: ${error.message}`);

        if (options.onError) {
          options.onError(error);
        }
      },
      ...Object.fromEntries(
        Object.entries(options).filter(
          ([key]) => !["onSuccess", "onError"].includes(key)
        )
      ),
    });

    return {
      isPendingShare: mutation.isPending,
      sharePost: mutation.mutate,
      errorSharePost: mutation.error,
      isErrorSharePost: mutation.isError,
      resetSharePost: mutation.reset,
    };
  },
};

export default useNews;
