import React, { useState, useRef, useEffect } from "react";
// import { GoogleGenerativeAI } from "@google/genai";
import { GoogleGenerativeAI } from "@google/generative-ai";

import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaPaperPlane,
  FaTimes,
  FaUser,
  FaMagic,
} from "react-icons/fa";

// --- PORTFOLIO CONTEXT ---
// This context is injected into the system prompt to allow the AI to answer specifics.
const PORTFOLIO_CONTEXT = `
You are an AI assistant for Raj Verma's Portfolio.
Your goal is to answer questions strictly related to Raj's professional background, projects, skills, and coding achievements.
If a user asks about general knowledge, jokes, math, or anything unrelated to the portfolio, politely refuse and redirect them to the portfolio topics.

Details about Raj Verma:
- **Role:** Full Stack Developer, UI/UX Enthusiast, Problem Solver.
- **Availability:** Available for work.
- **Experience:** Passionate about building scalable web apps and intuitive UX.
- **Stats:** 8+ Projects, 220+ DSA Problems solved.
- **Socials:** GitHub (rajverma04), LinkedIn (rajverma04), Instagram (rajjo.4).

Skills (Tech Stack):
- **MERN Stack:** React, Express.js, Node.js, MongoDB.
- **Frontend:** HTML5, Tailwind CSS, Redux, React Router, TypeScript.
- **Languages:** JavaScript, Python, Java, C++.
- **Backend & DB:** MySQL, MongoDB, Express, Node.
- **Tools:** Git, GitHub, Docker, VS Code, Postman, Figma.

Projects:
1. **Code Nexus:** Full-stack coding platform. VS Code-like editor (Monaco), real-time execution (Judge0), Node.js/MongoDB backend. Nov-Dec 2025.
2. **Swiggy Clone:** Real-time food delivery app using Swiggy Live API. React.js. Oct 2025.
3. **GST-INVOICE GENERATOR:** Full-stack invoice generator. React, MongoDB, Express. Live at gstinvoice.vercel.app. Jul-Aug 2025.
4. **AI CHATBOT:** Python/Flask/NLP based chatbot for students. Apr 2025.
5. **File Distributed System:** Distributed file system using Flask and C++. Apr 2025.

Coding Profiles:
- **LeetCode:** 100+ Problems solved.
- **GeeksforGeeks:** Institute Rank 6483.
- **HackerRank:** 5 Star Gold Badge.
`;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Hi! I'm Raj's AI assistant. Ask me anything about his projects, skills, or experience!",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // const handleSendMessage = async (e) => {
  //     e.preventDefault();
  //     if (!inputText.trim()) return;

  //     const userMessage = { role: "user", text: inputText };
  //     setMessages((prev) => [...prev, userMessage]);
  //     setInputText("");
  //     setIsLoading(true);

  //     try {
  //         // Check for API key (support both naming conventions)
  //         const apiKey = "AIzaSyAVyZLVOcVNA4w7PDgHqi_qnN9r69WekWY"

  //         if (!apiKey) {
  //             throw new Error("API Key not found. Please check .env file for REACT_APP_GEMINI_API_KEY or GEMINI_API_KEY.");
  //         }

  //         // Initialize Gemini API
  //         const genAI = new GoogleGenerativeAI(apiKey);
  //         const model = genAI.getGenerativeModel({
  //             model: "gemini-1.5-flash",
  //             systemInstruction: PORTFOLIO_CONTEXT
  //         });

  //         const chat = model.startChat({
  //             history: messages.map(m => ({
  //                 role: m.role === "model" ? "model" : "user",
  //                 parts: [{ text: m.text }]
  //             })),
  //             generationConfig: {
  //                 maxOutputTokens: 200, // Keep answers concise
  //             },
  //         });

  //         const result = await chat.sendMessage(inputText);
  //         const response = await result.response;
  //         const text = response.text();

  //         setMessages((prev) => [...prev, { role: "model", text: text }]);
  //     } catch (error) {
  //         console.error("ChatBot Error Details:", error);

  //         let errorMessage = "Oops! I encountered an error. Please try again later.";

  //         if (error.message.includes("API Key")) {
  //             errorMessage = "Configuration Error: API Key missing. Please check your .env file.";
  //         } else if (error.message.includes("403")) { // Common for invalid key or quota
  //             errorMessage = "API Error: Invalid credentials or quota exceeded.";
  //         } else {
  //             errorMessage += " Details: " + error.message; // Show details for debugging
  //         }

  //         setMessages((prev) => [
  //             ...prev,
  //             { role: "model", text: errorMessage },
  //         ]);
  //     } finally {
  //         setIsLoading(false);
  //     }
  // };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    // 1. Create the user message object
    const userMessage = { role: "user", text: inputText };

    // 2. Optimistically add user message to UI
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    try {
      const apiKey = process.env.REACT_APP_GEMINI_API_KEY; // Replace with your new key
      if (!apiKey) throw new Error("API Key not found");

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: PORTFOLIO_CONTEXT,
      });

      // 3. PREPARE HISTORY
      // We strip the first "Greeting" message.
      // We also filter the history to ensure we don't send 'broken' conversation states to Google.
      const apiHistory = messages.slice(1).map((m) => ({
        role: m.role === "model" ? "model" : "user",
        parts: [{ text: m.text }],
      }));

      const chat = model.startChat({
        history: apiHistory,
        generationConfig: { maxOutputTokens: 200 },
      });

      const result = await chat.sendMessage(inputText);
      const response = await result.response;
      const text = response.text();

      setMessages((prev) => [...prev, { role: "model", text: text }]);
    } catch (error) {
      console.error("ChatBot Error:", error); // Check your browser console (F12) for the exact error text

      // 4. ERROR HANDLING
      // If an error occurs, we MUST add a "model" message to the state.
      // This prevents the "Double User" bug if the user tries to chat again.
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "I'm having trouble connecting right now. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all border border-white/20"
      >
        {isOpen ? (
          <FaTimes className="text-xl" />
        ) : (
          <FaRobot className="text-xl" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[500px] bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-white/5 border-b border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                <FaRobot className="text-white text-lg" />
              </div>
              <div>
                <h3 className="font-bold text-white">Portfolio AI</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-gray-400">Online</span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-indigo-600 text-white rounded-br-none"
                        : "bg-white/10 text-gray-200 rounded-bl-none border border-white/5"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-bl-none flex gap-1">
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                    />
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        delay: 0.2,
                      }}
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                    />
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        delay: 0.4,
                      }}
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                    />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 bg-white/5 border-t border-white/10"
            >
              <div className="relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask about my projects..."
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <FaPaperPlane className="text-xs" />
                </button>
              </div>
              <div className="text-center mt-2">
                <p className="text-[10px] text-gray-600 flex items-center justify-center gap-1">
                  <FaMagic className="text-indigo-400" />
                  Powered by Gemini AI
                </p>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
