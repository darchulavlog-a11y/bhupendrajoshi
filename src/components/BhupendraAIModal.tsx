import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';
import { ChatMessage } from '../types';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  RotateCcw,
  Copy,
  Check,
  Bot,
  User,
  ExternalLink,
  Maximize2,
  Minimize2,
  BookOpen
} from 'lucide-react';

export const BhupendraAIModal: React.FC = () => {
  const { language, t } = useLanguage();
  const { isAiModalOpen, setIsAiModalOpen } = useContent();

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    return [
      {
        id: 'msg-welcome',
        sender: 'ai',
        text:
          language === 'ne'
            ? 'नमस्ते! म भुपेन्द्र एआई हुँ — भुपेन्द्र जोशीको व्यक्तिगत स्मार्ट AI सहायक। मलाई भुपेन्द्रका सफ्टवेयर परियोजनाहरू, दार्चुलाको विद्यालय, वा पाठ्यक्रम विकास केन्द्र (CDC) नेपालको कक्षा ९ को गणित, विज्ञान र कम्प्युटरका पाठहरूबारे सोध्नुहोस्!'
            : "Namaste! I am Bhupendra AI — Bhupendra Joshi's smart personal assistant. Ask me about Bhupendra's projects, school in Darchula, or any CDC Nepal Grade 9 mathematics, science, or computer lessons!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  });

  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isAiModalOpen) {
      scrollToBottom();
    }
  }, [messages, isAiModalOpen]);

  const handleSend = async (queryText?: string) => {
    const textToSend = (queryText || input).trim();
    if (!textToSend || loading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          conversationHistory: messages.slice(-6),
          language
        })
      });

      const data = await res.json();
      if (data.success) {
        const aiMsg: ChatMessage = {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: data.reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sources: data.sources
        };
        setMessages((prev) => [...prev, aiMsg]);
      } else {
        throw new Error(data.message || 'Chat service response error');
      }
    } catch (err: any) {
      const errorMsg: ChatMessage = {
        id: `ai-err-${Date.now()}`,
        sender: 'ai',
        text:
          language === 'ne'
            ? 'माफ गर्नुहोस्, सन्देश प्रशोधन गर्न समस्या भयो। कृपया पुन: प्रयास गर्नुहोस् वा तपाईंको इन्टरनेट जडान जाँच गर्नुहोस्।'
            : 'Sorry, I encountered an issue processing your query. Please try again or check connection.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'ai',
        text:
          language === 'ne'
            ? 'कुराकानी खाली गरियो। मलाई नयाँ प्रश्न सोध्न सक्नुहुन्छ!'
            : 'Chat cleared! Feel free to ask a new question.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const quickPrompts = [
    {
      en: 'Explain Degree to Radian conversion formula',
      ne: 'डिग्रीलाई रेडियनमा रूपान्तरण गर्ने सूत्र र नियम सम्झाउनुहोस्'
    },
    {
      en: "State Pascal's Law and Hydraulic Lift principle",
      ne: 'पास्कलको नियम र हाइड्रोलिक लिफ्टको सिद्धान्त व्याख्या गर्नुहोस्'
    },
    {
      en: 'Tell me about Bhupendra Joshi & Mahendra Model School',
      ne: 'भुपेन्द्र जोशी र महेन्द्र नमुना माध्यमिक विद्यालयबारे बताउनुहोस्'
    },
    {
      en: 'What are the coordinates and geography of Darchula?',
      ne: 'दार्चुलाको भौगोलिक अवस्थिति र अपी हिमालको उचाइ कति छ?'
    },
    {
      en: 'How to identify Nepali Padbarga (पदवर्ग पहिचान)?',
      ne: 'नेपाली व्याकरणमा पदवर्ग पहिचान गर्ने सजिलो तरिका के हो?'
    }
  ];

  return (
    <>
      {/* Floating Action Button at Bottom Right */}
      {!isAiModalOpen && (
        <button
          onClick={() => setIsAiModalOpen(true)}
          className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-slate-950 font-bold shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Open Bhupendra AI"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-slate-950 text-cyan-400 flex items-center justify-center font-bold">
              <Bot className="w-5 h-5 animate-pulse" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-xs uppercase font-extrabold tracking-wider text-white">
              {t('aiChatTitle')}
            </span>
            <span className="text-[10px] text-cyan-100 font-medium">
              {language === 'ne' ? 'अनलाइन सहायक' : 'Online AI Assistant'}
            </span>
          </div>
        </button>
      )}

      {/* Floating AI Chat Window */}
      {isAiModalOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 flex flex-col ${
            isExpanded
              ? 'inset-4 sm:inset-10 md:inset-16 bg-slate-900 border border-cyan-500/40 rounded-3xl shadow-2xl overflow-hidden'
              : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[94vw] sm:w-[440px] h-[580px] max-h-[88vh] bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden'
          }`}
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-cyan-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5">
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-cyan-400">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    {t('aiChatTitle')}
                  </h3>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-mono">
                    RAG + Gemini
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  {language === 'ne' ? 'तपाईंको आफ्नै स्मार्ट AI सहायक' : 'Your Smart Personal AI Assistant'}
                </p>
              </div>
            </div>

            {/* Header controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                title={t('aiClearChat')}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="hidden sm:inline-flex p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition"
                title={isExpanded ? 'Collapse' : 'Expand'}
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsAiModalOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                title="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-br-none shadow-md shadow-cyan-900/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none shadow-md shadow-slate-950/50'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.text}</div>

                  {/* Sources Citations */}
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-slate-800/80 space-y-1">
                      <div className="text-[10px] uppercase font-bold text-cyan-400 flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        {language === 'ne' ? 'प्रमाणित स्रोत तथा सन्दर्भ:' : 'Verified Sources:'}
                      </div>
                      {msg.sources.map((s, idx) => (
                        <div
                          key={idx}
                          className="text-[11px] bg-slate-950/80 p-1.5 rounded border border-slate-800/60 text-slate-300 flex items-center justify-between"
                        >
                          <span className="font-medium truncate">{s.title}</span>
                          <span className="text-[10px] text-cyan-400 font-mono shrink-0 ml-2">
                            {s.reference || 'CDC Grade 9'}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bubble Footer */}
                  <div className="flex items-center justify-between gap-3 mt-2 text-[10px] text-slate-400">
                    <span>{msg.timestamp}</span>
                    {msg.sender === 'ai' && (
                      <button
                        onClick={() => handleCopy(msg.text, msg.id)}
                        className="inline-flex items-center gap-1 hover:text-cyan-300 transition"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400 font-medium">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 items-center text-xs text-cyan-400">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-2xl rounded-bl-none flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-bounce delay-150"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-bounce delay-300"></span>
                  <span className="text-slate-400 ml-1">
                    {language === 'ne' ? 'खोज्दै र उत्तर तयार गर्दैछ...' : 'Retrieving from CDC library & formulating response...'}
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions */}
          <div className="px-3 py-2 bg-slate-950 border-t border-slate-800/80 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-2">
            {quickPrompts.map((qp, index) => (
              <button
                key={index}
                onClick={() => handleSend(language === 'ne' ? qp.ne : qp.en)}
                disabled={loading}
                className="text-[11px] px-2.5 py-1 rounded-full bg-slate-900 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/30 transition shrink-0"
              >
                {language === 'ne' ? qp.ne : qp.en}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('aiInputPlaceholder')}
              disabled={loading}
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
