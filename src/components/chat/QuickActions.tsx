import { Code2, Github, Puzzle, Database, Rocket } from "lucide-react";

interface QuickActionsProps {
  onAction: (action: string) => void;
}

const actions = [
  { icon: Code2, label: "Generate Code", prompt: "Generate code for my website" },
  { icon: Github, label: "Deploy to GitHub Pages", prompt: "Deploy repository for this website to GitHub Pages" },
  { icon: Puzzle, label: "Custom Integrations", prompt: "Set Up Custom Integrations & Connectors" },
  { icon: Database, label: "Supabase Setup", prompt: "Enable Supabase for User Authentication, Storage & Real-Time Messaging" },
  { icon: Rocket, label: "Deploy to Vercel", prompt: "Deploy web project to Vercel" },
];

const QuickActions = ({ onAction }: QuickActionsProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <button
            key={action.label}
            onClick={() => onAction(action.prompt)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-transparent whitespace-nowrap text-sm hover:bg-secondary transition-colors relative overflow-hidden group"
            style={{
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            <div className="absolute inset-0 rainbow-gradient opacity-30 group-hover:opacity-50 transition-opacity" />
            <Icon className="w-4 h-4 relative z-10" />
            <span className="relative z-10">{action.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default QuickActions;
