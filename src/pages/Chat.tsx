import { useState } from "react";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatWindow from "@/components/chat/ChatWindow";
import QuickActions from "@/components/chat/QuickActions";
import ChatInput from "@/components/chat/ChatInput";
import ChatNavigation from "@/components/chat/ChatNavigation";
import StatusIndicator from "@/components/chat/StatusIndicator";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm Origin AI, your coding assistant. I can help you generate, edit, and deploy website code. What would you like to build today?",
      timestamp: new Date(),
    },
  ]);
  const [status, setStatus] = useState<string>("Ready");

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setStatus("Processing...");

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "I understand. Let me help you with that. This is a demo response showing the chat interface in action.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setStatus("Ready");
    }, 1500);
  };

  const handleQuickAction = (action: string) => {
    handleSendMessage(action);
  };

  return (
    <div className="min-h-screen bg-background light-mode-gradient dark:dark-mode-gradient flex flex-col">
      <ChatHeader />
      <div className="flex-1 flex flex-col max-w-5xl w-full mx-auto px-4 md:px-6 lg:px-8">
        <ChatWindow messages={messages} />
        <div className="pb-4 space-y-3">
          <StatusIndicator status={status} />
          <QuickActions onAction={handleQuickAction} />
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>
      <ChatNavigation />
    </div>
  );
};

export default Chat;
