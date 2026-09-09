import { useChatbot } from "@/hooks/useChatbot";
import {
  MessageCircle,
  Send,
  Loader2,
  Minimize2,
  X,
  Bot,
  User,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CHATBOT } from "@/content";

const Chatbot = () => {
  const {
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
  } = useChatbot();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // 🎭 Animation Variants
  const chatWindowVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
      transformOrigin: "bottom left",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      y: 30,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const buttonVariants = {
    minimized: {
      scale: 0.9,
      rotate: 0,
      backgroundColor: "#AF6553",
    },
    expanded: {
      scale: 1,
      rotate: 0,
      backgroundColor: "#AF6553",
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#844b3d",
      boxShadow: "0 8px 25px rgba(175, 101, 83, 0.3)",
    },
    tap: { scale: 0.95 },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
  };

  const loadingVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* 🤖 Animated Chat Window */}
      <AnimatePresence mode="wait">
        {!isMinimized && (
          <motion.div
            key="chat-window"
            variants={chatWindowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-lg shadow-2xl w-80 h-96 flex flex-col mb-4 border border-gray-200 overflow-hidden"
          >
            {/* Header with subtle animations */}
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="bg-[#AF6553] text-white p-4 rounded-t-lg flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                >
                  <Bot className="h-5 w-5" />
                </motion.div>
                <h3 className="font-semibold">{CHATBOT.title}</h3>
              </div>
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={clearChat}
                  className="text-white/80 hover:text-white transition-colors"
                  title={CHATBOT.clear}
                >
                  <X className="h-4 w-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleChat}
                  className="text-white/80 hover:text-white transition-colors"
                  title={CHATBOT.minimize}
                >
                  <Minimize2 className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>

            {/* Messages with staggered animations */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50"
            >
              {chatHistory.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-center text-gray-500 py-8"
                >
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  >
                    <Bot className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                  </motion.div>
                  <p>{CHATBOT.greeting}</p>
                  <p className="text-sm">{CHATBOT.greetingSub}</p>
                </motion.div>
              )}

              <AnimatePresence>
                {chatHistory.map((message, index) => (
                  <motion.div
                    key={`${message.timestamp}-${index}`}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    className={`flex ${
                      message.from === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <motion.div
                      className={`max-w-[85%] p-3 rounded-lg ${
                        message.from === "user"
                          ? "bg-[#AF6553] text-white"
                          : "bg-white text-gray-800 border border-gray-200"
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.from === "bot" && (
                          <motion.div
                            initial={{ rotate: -180, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                          >
                            <Bot className="h-4 w-4 mt-0.5 text-[#AF6553] flex-shrink-0" />
                          </motion.div>
                        )}
                        {message.from === "user" && (
                          <motion.div
                            initial={{ scale: 0, rotate: 180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.3, type: "spring" }}
                          >
                            <User className="h-4 w-4 mt-0.5 text-white flex-shrink-0" />
                          </motion.div>
                        )}
                        <div className="flex-1 min-w-0">
                          {" "}
                          {/* Added min-w-0 for better text wrapping */}
                          {message.htmlMessage ? (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.1, duration: 0.3 }}
                              dangerouslySetInnerHTML={{
                                __html: message.htmlMessage,
                              }}
                              className="prose  prose-sm max-w-none prose-slate prose-a:text-[#AF6553] prose-a:font-medium hover:prose-a:underline prose-p:mb-2 prose-p:mt-0 prose-p:last:mb-0 break-words "
                            />
                          ) : (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.1, duration: 0.3 }}
                              className="text-sm break-words leading-relaxed"
                            >
                              {message.message}
                            </motion.p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Animated Loading State */}
              <AnimatePresence>
                {loading && (
                  <motion.div
                    key="loading"
                    variants={loadingVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex justify-start"
                  >
                    <div className="bg-white text-gray-800 border border-gray-200 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <Bot className="h-4 w-4 text-[#AF6553]" />
                        </motion.div>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <Loader2 className="h-4 w-4 text-[#AF6553]" />
                        </motion.div>
                        <motion.span
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="text-sm"
                        >
                          {CHATBOT.thinking}
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </motion.div>

            {/* Guided chips — the front door, and the way out when the
                assistant is not sure what was meant. */}
            <AnimatePresence>
              {chips.length > 0 && !loading && (
                <motion.div
                  key="chips"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-wrap gap-2 px-4 pb-1"
                >
                  {chips.map((chip) => (
                    <motion.button
                      key={chip.label}
                      type="button"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => sendChip(chip)}
                      className="px-3 py-1.5 text-xs rounded-full border border-[#AF6553]/40 text-[#AF6553] bg-white hover:bg-[#AF6553] hover:text-white transition-colors"
                    >
                      {chip.label}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input with slide-up animation */}
            <motion.form
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              onSubmit={handleSubmit}
              className="p-4 border-t border-gray-200"
            >
              <div className="flex space-x-2">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={CHATBOT.placeholder}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#AF6553] focus:border-transparent text-sm transition-all"
                  disabled={loading}
                />

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#844b3d",
                    rotate: [0, -5, 5, 0],
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={loading || !prompt.trim()}
                  className="bg-[#AF6553] text-white p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔘 Animated Chat Toggle Button */}
      <motion.button
        variants={buttonVariants}
        initial="expanded"
        animate={isMinimized ? "minimized" : "expanded"}
        whileHover="hover"
        whileTap="tap"
        onClick={toggleChat}
        className="text-white p-3 rounded-full shadow-lg transition-all"
        title={isMinimized ? CHATBOT.open : CHATBOT.close}
      >
        <motion.div
          animate={{ rotate: isMinimized ? 0 : 180 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isMinimized ? (
            <MessageCircle className="h-6 w-6" />
          ) : (
            <Minimize2 className="h-6 w-6" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default Chatbot;
