import React from 'react';
import { MessageSquare, Bot } from 'lucide-react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        isUser ? 'bg-blue-500' : 'bg-gray-200'
      }`}>
        {isUser ? (
          <MessageSquare className="w-4 h-4 text-white" />
        ) : (
          <Bot className="w-4 h-4 text-gray-700" />
        )}
      </div>
      <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
        isUser ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
      }`}>
        <p className="text-sm">{message.content}</p>
      </div>
    </div>
  );
}