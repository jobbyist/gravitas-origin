import { Sparkles } from "lucide-react";

const ChatHeader = () => {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-primary-foreground" />
        </div>
        <h1 className="text-lg font-semibold text-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Origin AI Chat
        </h1>
      </div>
    </header>
  );
};

export default ChatHeader;
