import { Calendar, X } from 'lucide-react';
import { useBookingChat } from '@/hooks/useBookingChat';
import ChatWindow from './ChatWindow';

interface BookingChatbotProps {
  embedded?: boolean;
}

const BookingChatbot = ({ embedded = false }: BookingChatbotProps) => {
  const {
    isOpen,
    messages,
    isLoading,
    showCustomerForm,
    toggleOpen,
    handleUserInput,
    handleCustomerSubmit,
    closeCustomerForm,
  } = useBookingChat();

  if (embedded) {
    return (
      <div className="w-full max-w-lg mx-auto h-[600px] bg-background border border-border rounded-2xl shadow-xl flex flex-col overflow-hidden">
        <ChatWindow
          messages={messages}
          isLoading={isLoading}
          showCustomerForm={showCustomerForm}
          onClose={() => {}}
          onSendMessage={handleUserInput}
          onCustomerSubmit={handleCustomerSubmit}
          onCustomerFormClose={closeCustomerForm}
        />
      </div>
    );
  }

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={toggleOpen}
        className={`fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen
            ? 'bg-muted text-muted-foreground'
            : 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground hover:shadow-primary/40 hover:shadow-xl'
        }`}
        aria-label={isOpen ? 'Chat schließen' : 'Terminbuchung öffnen'}
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <ChatWindow
          messages={messages}
          isLoading={isLoading}
          showCustomerForm={showCustomerForm}
          onClose={toggleOpen}
          onSendMessage={handleUserInput}
          onCustomerSubmit={handleCustomerSubmit}
          onCustomerFormClose={closeCustomerForm}
        />
      )}
    </>
  );
};

export default BookingChatbot;
