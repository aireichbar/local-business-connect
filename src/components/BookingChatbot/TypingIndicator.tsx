const TypingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="bg-card border border-border rounded-2xl rounded-bl-sm px-4 py-3">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
          <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:0.1s]" />
          <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce [animation-delay:0.2s]" />
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
