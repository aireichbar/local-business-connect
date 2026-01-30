import type { ChatMessage as ChatMessageType } from '@/types/chat';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
          isUser
            ? 'bg-primary text-primary-foreground rounded-br-sm'
            : 'bg-card border border-border text-foreground rounded-bl-sm'
        }`}
      >
        {message.html ? (
          <div 
            className="text-sm leading-relaxed [&_a]:text-primary [&_a]:underline [&_a]:font-medium [&_ul]:list-disc [&_ul]:ml-4 [&_p]:mb-2 [&_button]:bg-primary [&_button]:text-primary-foreground [&_button]:px-4 [&_button]:py-2 [&_button]:rounded-lg [&_button]:mt-2 [&_button]:block [&_button]:w-full [&_button]:text-center [&_button]:no-underline [&_button]:hover:opacity-90 [&_button]:transition-opacity"
            dangerouslySetInnerHTML={{ __html: message.html }}
            onClick={(e) => {
              const target = e.target as HTMLElement;
              const link = target.closest('a');
              if (link && link.href) {
                e.preventDefault();
                window.open(link.href, '_blank', 'noopener,noreferrer');
              }
            }}
          />
        ) : (
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
