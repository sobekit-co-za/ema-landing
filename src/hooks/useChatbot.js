import { useState, useEffect, useRef, useCallback } from "react";
import { ask, openingChips, USING_GEMINI } from "@/services/chatbot";
import { RateLimitError } from "@/services/geminiService";
import { CHATBOT } from "@/content";

export const useChatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [isMinimized, setIsMinimized] = useState(true);

  // The chips currently on offer. The local engine drives these; the Gemini
  // engine simply never returns any, so the UI degrades to a plain text box.
  const [chips, setChips] = useState(() =>
    USING_GEMINI ? [] : openingChips()
  );
  // What the conversation is "about", so a bare "how much?" resolves.
  const lastModuleId = useRef(null);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, chips]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 100);
  };

  /**
   * Send one message. `text` lets a chip submit on the visitor's behalf
   * without going through the input box.
   */
  const send = useCallback(
    async (text, { display = text } = {}) => {
      const userMessage = String(text ?? "").trim();
      if (!userMessage || loading) return;

      setPrompt("");
      setLoading(true);
      setChips([]);

      const historyBefore = chatHistory;

      setChatHistory((prev) => [
        ...prev,
        {
          from: "user",
          // Chips send a __command but should read as their label in the
          // transcript.
          message: display.startsWith("__") ? display.slice(2) : display,
          timestamp: new Date().toISOString(),
        },
      ]);

      try {
        const answer = await ask(userMessage, {
          history: historyBefore,
          lastModuleId: lastModuleId.current,
        });

        if (answer.moduleId) lastModuleId.current = answer.moduleId;

        setChatHistory((prev) => [
          ...prev,
          {
            from: "bot",
            message: answer.text,
            htmlMessage: answer.html,
            timestamp: new Date().toISOString(),
          },
        ]);
        setChips(answer.chips ?? []);
      } catch (error) {
        console.error("Chatbot error:", error);
        setChatHistory((prev) => [
          ...prev,
          {
            from: "bot",
            message:
              error instanceof RateLimitError
                ? `A lot of people are chatting right now. Please try again in about ${error.retryAfterSeconds} seconds.`
                : "I'm sorry, I'm having trouble responding right now. Please try again later.",
            timestamp: new Date().toISOString(),
          },
        ]);
        setChips(USING_GEMINI ? [] : openingChips());
      } finally {
        setLoading(false);
      }
    },
    [chatHistory, loading]
  );

  const sendMessage = useCallback(() => send(prompt), [send, prompt]);

  /** A chip sends its command but shows its label. */
  const sendChip = useCallback(
    (chipToSend) => send(chipToSend.send, { display: chipToSend.label }),
    [send]
  );

  const toggleChat = () => setIsMinimized((v) => !v);

  const clearChat = () => {
    setChatHistory([]);
    lastModuleId.current = null;
    setChips(USING_GEMINI ? [] : openingChips());
  };

  return {
    chatHistory,
    loading,
    prompt,
    setPrompt,
    isMinimized,
    sendMessage,
    sendChip,
    chips,
    toggleChat,
    clearChat,
    messagesEndRef,
    placeholder: CHATBOT.placeholder,
  };
};
