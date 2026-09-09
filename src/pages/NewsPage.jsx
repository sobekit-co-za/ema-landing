import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import useNews from "@/hooks/useNews";
import {
  MessageCircle,
  Heart,
  Share2,
  Clock,
  User,
  Send,
  Loader2,
  Image as ImageIcon,
  Play,
  Import,
} from "lucide-react";

import Logo from "../assets/shared/new_logo_2.png";
import toast from "@/lib/toast";
import Seo from "@/components/shared/Seo";
import { LANG_TAG, NEWS } from "@/content";
import { SEO } from "@/content/seo";

const NewsPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [commentFormData, setCommentFormData] = useState({
    name: "",
    comment: "",
  });

  // 🎯 Using your new API hooks
  const { isLoadingPosts, posts, errorPosts } = useNews.useAll();
  const { comments, isLoadingComments } = useNews.useComments(selectedPostId);
  const { isPendingComment, addComment } = useNews.useAddComment(
    selectedPostId,
    {
      onSuccess: () => {
        setCommentFormData({ name: "", comment: "" });
        // toast.success("Comment posted successfully! 🎉");
      },
    }
  );

  // 🚀 SCROLL TO TOP ON PAGE LOAD
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const formatTime = (timestamp) => {
    // Was hardcoded to "ar-EG", so every language showed Arabic dates.
    return new Date(timestamp).toLocaleDateString(LANG_TAG, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handleCommentToggle = (postId) => {
    setSelectedPostId(selectedPostId === postId ? null : postId);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentFormData.name.trim() || !commentFormData.comment.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    addComment(commentFormData);
  };

  // 🎨 Client-side like/share handlers (since backend endpoints don't exist)
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [postLikes, setPostLikes] = useState({});

  // Seed like counts from the fetched posts.
  // Writes state only when the derived map actually differs, so a re-render
  // can never feed itself another update.
  useEffect(() => {
    if (!posts?.length) return;

    const likesMap = {};
    for (const post of posts) likesMap[post.id] = post.noOfLikes;

    setPostLikes((prev) => {
      const keys = Object.keys(likesMap);
      const same =
        keys.length === Object.keys(prev).length &&
        keys.every((k) => prev[k] === likesMap[k]);
      return same ? prev : likesMap;
    });
  }, [posts]);

  // Client-side only: the backend has no like endpoint.
  const handleLike = (postId) => {
    const isLiked = likedPosts.has(postId);
    const newLikedPosts = new Set(likedPosts);

    if (isLiked) {
      newLikedPosts.delete(postId);
      setPostLikes((prev) => ({ ...prev, [postId]: (prev[postId] ?? 1) - 1 }));
      toast.success("Like removed! 💔");
    } else {
      newLikedPosts.add(postId);
      setPostLikes((prev) => ({ ...prev, [postId]: (prev[postId] ?? 0) + 1 }));
      toast.success("Post liked! ❤️");
    }

    setLikedPosts(newLikedPosts);
  };

  // 🔄 Loading state
  // 🔄 Loading state
  if (isLoadingPosts) {
    return (
      <div className="pt-24 min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-slate-600">{NEWS.loading}</p>
        </div>
      </div>
    );
  }

  // ❌ Error state
  if (errorPosts) {
    return (
      <div className="pt-24 min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-red-800 mb-2">
              {NEWS.errorTitle}
            </h2>
            <p className="text-red-600 mb-4">{NEWS.errorBody}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              {NEWS.retry}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Seo title={SEO.news.title} description={SEO.news.description} />

      {/* 🎨 Hero Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              {NEWS.title}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {NEWS.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* 📰 Posts Feed */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {posts?.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-700 mb-2">
                {NEWS.emptyTitle}
              </h3>
              <p className="text-slate-500">
                {NEWS.emptyBody}
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {posts?.map((post) => (
              <article
                key={post.id}
                id={`post-${post.id}`}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                {/* 📝 Post Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12  rounded-full flex items-center justify-center">
                        {/* <User className="h-6 w-6 text-white" /> */}
                        <img src={Logo} alt="logo" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">eMa</h3>
                        <div className="flex items-center text-sm text-slate-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {formatTime(post.createdAt)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 🎯 Post Title */}
                  <h2 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                    {post.title}
                  </h2>

                  {/* 📄 Post Content */}
                  <div
                    className="prose prose-slate max-w-none mb-6"
                    dangerouslySetInnerHTML={{ __html: post.details }}
                  />

                  {/* 🖼️ Media Gallery */}
                  {post.postDetailses?.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {post.postDetailses.map((media, index) => (
                        <div
                          key={index}
                          className="relative rounded-lg overflow-hidden"
                        >
                          {media.type === "image" ? (
                            <img
                              src={media.mediaLink}
                              alt={`Post media ${index + 1}`}
                              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                            />
                          ) : media.type === "video" ? (
                            <div className="relative">
                              <video
                                src={media.mediaLink}
                                className="w-full h-64 object-cover"
                                controls
                              />
                              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <Play className="h-12 w-12 text-white opacity-80" />
                              </div>
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 🎭 Interaction Bar */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center space-x-2 transition-colors group ${
                          likedPosts.has(post.id)
                            ? "text-red-600"
                            : "text-slate-600 hover:text-red-600"
                        }`}
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            likedPosts.has(post.id)
                              ? "fill-current"
                              : "group-hover:fill-current"
                          }`}
                        />
                        <span className="font-medium">
                          {postLikes[post.id] || post.noOfLikes}
                        </span>
                      </button>

                      <button
                        onClick={() => handleCommentToggle(post.id)}
                        className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        <MessageCircle className="h-5 w-5" />
                        <span className="font-medium">{post.noOfComments}</span>
                      </button>

                      {/* <button
                        onClick={() => handleShare(post.id)}
                        className="flex items-center space-x-2 text-slate-600 hover:text-green-600 transition-colors"
                      >
                        <Share2 className="h-5 w-5" />
                        <span className="font-medium">Share</span>
                      </button> */}
                    </div>
                  </div>
                </div>

                {/* 💬 Comments Section */}
                {selectedPostId === post.id && (
                  <div className="border-t border-slate-200 bg-slate-50">
                    {/* Comment Form */}
                    {/* Comment Form */}
                    <div className="p-6">
                      <form
                        onSubmit={handleCommentSubmit}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder={NEWS.namePlaceholder}
                            value={commentFormData.name}
                            onChange={(e) =>
                              setCommentFormData((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                            className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div className="flex space-x-3">
                          <textarea
                            placeholder={NEWS.commentPlaceholder}
                            rows={3}
                            value={commentFormData.comment}
                            onChange={(e) =>
                              setCommentFormData((prev) => ({
                                ...prev,
                                comment: e.target.value,
                              }))
                            }
                            className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          />
                          <button
                            type="submit"
                            disabled={isPendingComment}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                          >
                            {isPendingComment ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Send className="h-4 w-4" />
                            )}
                            <span>{NEWS.post}</span>
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* Comments List */}
                    {/* Comments List */}
                    <div className="px-6 pb-6">
                      {isLoadingComments ? (
                        <div className="flex items-center justify-center py-8">
                          <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
                          <span className="ml-2 text-slate-600">
                            {NEWS.loadingComments}
                          </span>
                        </div>
                      ) : comments?.length > 0 ? (
                        <div className="space-y-4">
                          <h4 className="font-semibold text-slate-900">
                            {NEWS.comments} ({comments.length})
                          </h4>
                          {comments.map((comment) => (
                            <div
                              key={comment.id}
                              className="bg-white rounded-lg p-4 shadow-sm"
                            >
                              <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                                  <User className="h-4 w-4 text-white" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-1">
                                    <span className="font-medium text-slate-900">
                                      {comment.userDTO?.fullName ||
                                        comment.name}
                                    </span>
                                  </div>
                                  <p className="text-slate-700">
                                    {comment.comment}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <MessageCircle className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                          <p className="text-slate-500">
                            {NEWS.noComments}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
