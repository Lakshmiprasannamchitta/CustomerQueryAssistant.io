import React, { useState, useRef, useEffect } from 'react';
import { Bot } from 'lucide-react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { TypingIndicator } from './components/TypingIndicator';
import { Message, ChatState } from './types';

// API Endpoints and keys
const CHATGPT_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const INVENTORY_API_URL = 'https://mobile-phones2.p.rapidapi.com/brands';

// Environment variables for API keys
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

function App() {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [
      {
        id: '1',
        content: 'Hello! How can I assist you today?',
        role: 'assistant',
        timestamp: new Date(),
      },
    ],
    isTyping: false,
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages]);

  const validateApiKeys = () => {
    if (!OPENAI_API_KEY) {
      throw new Error('OpenAI API key is not configured');
    }
    if (!RAPIDAPI_KEY) {
      throw new Error('RapidAPI key is not configured');
    }
  };

  const fetchInventory = async (): Promise<string[]> => {
    validateApiKeys();
    try {
      const response = await fetch(INVENTORY_API_URL, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'mobile-phones2.p.rapidapi.com',
          'X-RapidAPI-Key': RAPIDAPI_KEY,
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Failed to fetch inventory (Status: ${response.status})`);
      }

      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Inventory API Error:', error);
      throw error;
    }
  };

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isTyping: true,
    }));

    try {
      validateApiKeys();

      let responseContent = '';

      if (content.toLowerCase().includes('inventory') || content.toLowerCase().includes('products')) {
        try {
          const inventory = await fetchInventory();
          responseContent = inventory.length
            ? `Here are the available products: ${inventory.join(', ')}`
            : 'No products available at the moment.';
        } catch (error) {
          responseContent = 'I apologize, but I cannot access the inventory information at the moment. Please try again later.';
        }
      } else {
        const response = await fetch(CHATGPT_API_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-4',
            messages: [{ role: 'user', content }],
            temperature: 0.7,
            max_tokens: 150,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || `Failed to get response from ChatGPT (Status: ${response.status})`);
        }

        const data = await response.json();
        responseContent = data.choices[0]?.message?.content || 'I couldn’t process your request. Please try again.';
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responseContent,
        role: 'assistant',
        timestamp: new Date(),
      };

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isTyping: false,
      }));
    } catch (error) {
      console.error('Chat Error:', error);

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: error instanceof Error && error.message.includes('API key')
          ? 'The chat service is not properly configured. Please check the API keys configuration.'
          : 'I apologize, but I encountered an error processing your request. Please try again later.',
        role: 'assistant',
        timestamp: new Date(),
      };

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
        isTyping: false,
      }));
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-4xl px-4 py-6">
          <div className="flex items-center gap-2">
            <Bot className="h-8 w-8 text-blue-500" />
            <h1 className="text-xl font-semibold text-gray-900">AI Customer Assistant</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4">
        <div className="mx-auto max-w-4xl rounded-lg bg-white shadow">
          <div className="h-[600px] overflow-y-auto p-4">
            <div className="flex flex-col gap-4">
              {chatState.messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {chatState.isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="border-t p-4">
            <ChatInput onSend={handleSendMessage} disabled={chatState.isTyping} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
