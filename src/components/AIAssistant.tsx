import React, { useState } from 'react';
import { MessageCircle, Send, Sparkles, X } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { menuItems } from '../data/menuData';

interface AIAssistantProps {
  mostPurchasedItems: any[];
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ mostPurchasedItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'ai'; content: string }>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      let response: string;
      
      if (userMessage.toLowerCase().includes('most popular') || userMessage.toLowerCase().includes('most purchased')) {
        if (mostPurchasedItems.length > 0) {
          const popularItemsText = mostPurchasedItems
            .map((item, index) => `${index + 1}. ${item.name} - ₹${item.price} (Ordered ${item.purchaseCount} times)`)
            .join('\n');
          
          response = `Here are our most popular Indian dishes based on customer orders:\n\n${popularItemsText}\n\nWould you like me to recommend any of these popular choices? I can also suggest perfect combinations with rice or bread!`;
        } else {
          response = "We don't have enough order history yet to show most popular items, but I can recommend some authentic Indian dishes from our menu! Are you in the mood for something spicy, mild, vegetarian, or non-vegetarian? I can also suggest perfect combinations!";
        }
      } else if (userMessage.toLowerCase().includes('recommend')) {
        response = await geminiService.getMenuRecommendation(userMessage, menuItems);
      } else {
        response = await geminiService.answerMenuQuery(userMessage, menuItems);
      }

      setMessages(prev => [...prev, { type: 'ai', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        type: 'ai', 
        content: 'Sorry, I encountered an error. Please try again later.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What are your most popular Indian dishes?",
    "Recommend vegetarian options",
    "What's the best biryani?",
    "Suggest a complete Indian meal"
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-40"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-96 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5" />
              <span className="font-medium">AI Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <div className="text-center py-4">
                <p className="text-gray-600 mb-4">Namaste! I'm your AI assistant for Spice Palace. Ask me about our authentic Indian menu, popular dishes, or get personalized recommendations!</p>
                <div className="space-y-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInput(question)}
                      className="block w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our menu..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className="bg-purple-500 text-white p-2 rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};