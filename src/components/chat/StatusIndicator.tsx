import { Activity } from "lucide-react";

interface StatusIndicatorProps {
  status: string;
}

const StatusIndicator = ({ status }: StatusIndicatorProps) => {
  const isProcessing = status === "Processing...";

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <div className="flex items-center gap-1.5">
        <Activity className={`w-4 h-4 ${isProcessing ? "animate-pulse" : ""}`} />
        <span style={{ fontFamily: "'Montserrat', sans-serif" }}>{status}</span>
      </div>
      {isProcessing && (
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      )}
    </div>
  );
};

export default StatusIndicator;
