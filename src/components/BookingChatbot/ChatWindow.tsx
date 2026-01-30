import { useRef, useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import type { ChatMessage as ChatMessageType, CustomerData } from '@/types/chat';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import CustomerForm from './CustomerForm';
import TypingIndicator from './TypingIndicator';

interface ChatWindowProps {
  messages: ChatMessageType[];
  isLoading: boolean;
  showCustomerForm: boolean;
  onClose: () => void;
  onSendMessage: (message: string) => void;
  onCustomerSubmit: (data: CustomerData) => void;
  onCustomerFormClose: () => void;
}

const ChatWindow = ({
  messages,
  isLoading,
  showCustomerForm,
  onClose,
  onSendMessage,
  onCustomerSubmit,
  onCustomerFormClose,
}: ChatWindowProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[500px] max-h-[calc(100vh-150px)] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300 max-sm:inset-0 max-sm:w-full max-sm:h-full max-sm:max-h-none max-sm:rounded-none max-sm:bottom-0 max-sm:right-0">
      {/* Header */}
      <div className="bg-primary px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
          <Calendar className="w-5 h-5 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <p className="text-primary-foreground font-semibold text-sm">aireichbar Demo-Assistent</p>
          <p className="text-primary-foreground/80 text-xs">Online • Antwortet sofort</p>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-primary-foreground/20 rounded-full transition-colors"
          aria-label="Chat schließen"
        >
          <X className="w-5 h-5 text-primary-foreground" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/30 relative">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        {isLoading && <TypingIndicator />}
        <div ref={messagesEndRef} />

        {/* Customer Form Overlay */}
        {showCustomerForm && (
          <CustomerForm
            onSubmit={onCustomerSubmit}
            onClose={onCustomerFormClose}
          />
        )}
      </div>

      {/* Input Area */}
      <ChatInput
        onSend={onSendMessage}
        isLoading={isLoading}
        disabled={showCustomerForm}
      />
    </div>
  );
};

export default ChatWindow;
