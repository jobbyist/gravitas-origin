import { MessageSquarePlus, Settings, History, Package } from "lucide-react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ChatNavigation = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="sticky bottom-0 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-3 flex items-center justify-center gap-6">
        <button
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          title="New Chat"
        >
          <MessageSquarePlus className="w-5 h-5" />
          <span className="text-[10px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>New</span>
        </button>
        <button
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          title="History"
        >
          <History className="w-5 h-5" />
          <span className="text-[10px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>History</span>
        </button>
        <button
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          title="Integrations"
        >
          <Package className="w-5 h-5" />
          <span className="text-[10px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Tools</span>
        </button>
        <button
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          title="Settings"
        >
          <Settings className="w-5 h-5" />
          <span className="text-[10px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Settings</span>
        </button>
        <button
          onClick={toggleTheme}
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          title="Toggle Theme"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          <span className="text-[10px]" style={{ fontFamily: "'Montserrat', sans-serif" }}>Theme</span>
        </button>
      </div>
    </nav>
  );
};

export default ChatNavigation;
