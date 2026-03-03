import { useState } from "react";
import { Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput = ({ onSend }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative">
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Describe what you want to build..."
        className="min-h-[52px] pr-14 resize-none border-border"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "16px",
          borderRadius: "12px",
          borderWidth: "1.5px",
        }}
      />
      <button
        onClick={handleSend}
        disabled={!input.trim()}
        className="absolute right-2 bottom-2 w-10 h-10 rounded-lg bg-primary flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Send className="w-4 h-4 text-primary-foreground" />
      </button>
    </div>
  );
};

export default ChatInput;
