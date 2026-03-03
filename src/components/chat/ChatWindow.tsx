import { useEffect, useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Message } from "@/pages/Chat";

interface ChatWindowProps {
  messages: Message[];
}

const ChatWindow = ({ messages }: ChatWindowProps) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ScrollArea className="flex-1 py-4">
      <div ref={scrollAreaRef} className="space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-xl px-4 py-3 relative ${
                message.role === "user"
                  ? "bg-background ml-auto"
                  : "bg-secondary"
              }`}
              style={{
                border: "1px solid transparent",
                backgroundImage:
                  message.role === "user"
                    ? "linear-gradient(var(--background), var(--background)), linear-gradient(90deg, #ff0000 0%, #ff7f00 14.28%, #ffff00 28.56%, #00ff00 42.84%, #0000ff 57.12%, #4b0082 71.4%, #9400d3 85.68%, #ff0000 100%)"
                    : "none",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                {message.content}
              </p>
              <span className="text-[10px] text-muted-foreground mt-1 block">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ChatWindow;
