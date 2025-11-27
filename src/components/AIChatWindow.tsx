import { motion } from 'framer-motion';
import { Bot, Send } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface Message {
    id: number;
    text: string;
    sender: 'ai' | 'user';
}

interface AIChatWindowProps {
    initialMessages: Message[];
    title?: string;
}

const AIChatWindow = ({ initialMessages, title = "Nexby AI Assistant" }: AIChatWindowProps) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Simulate typing effect for initial messages
        let delay = 0;
        const timeouts: ReturnType<typeof setTimeout>[] = [];

        initialMessages.forEach((msg) => {
            const timeout = setTimeout(() => {
                setMessages(prev => [...prev, msg]);
            }, delay);
            timeouts.push(timeout);
            delay += 1500; // Delay between messages
        });

        return () => timeouts.forEach(clearTimeout);
    }, [initialMessages]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden h-[500px] flex flex-col">
            {/* Header */}
            <div className="bg-slate-900 p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Bot className="text-white" size={20} />
                </div>
                <div>
                    <h3 className="text-white font-bold text-sm">{title}</h3>
                    <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-gray-400 text-xs">Online</span>
                    </div>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-gray-50 p-4 overflow-y-auto space-y-4" ref={scrollRef}>
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed ${msg.sender === 'user'
                            ? 'bg-purple-600 text-white rounded-tr-none'
                            : 'bg-white text-gray-700 border border-gray-200 rounded-tl-none shadow-sm'
                            }`}>
                            {msg.text}
                        </div>
                    </motion.div>
                ))}
                {messages.length < initialMessages.length && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-1 ml-2"
                    >
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </motion.div>
                )}
            </div>

            {/* Input Area (Visual only) */}
            <div className="p-4 bg-white border-t border-gray-100">
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        disabled
                        className="flex-1 bg-gray-100 border-0 rounded-full px-4 py-2 text-sm focus:ring-0 cursor-not-allowed opacity-70"
                    />
                    <button disabled className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center opacity-70 cursor-not-allowed">
                        <Send className="text-white" size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AIChatWindow;
