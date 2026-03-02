import { useState, useEffect } from "react";
import { Maximize2, Box } from "lucide-react";

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 transition-all duration-200 ${
        scrolled
          ? "bg-header-bg shadow-[var(--header-shadow)]"
          : "bg-transparent"
      }`}
    >
      {/* Left: logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <Box className="text-primary-foreground" size={16} strokeWidth={2.5} />
        </div>
        <span className="text-sm font-semibold text-foreground tracking-tight">
          Gravitas Origin
        </span>
      </div>

      {/* Right: expand icon */}
      <button
        className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all ${
          scrolled
            ? "bg-background border border-border shadow-sm"
            : "text-foreground/60"
        }`}
      >
        <Maximize2 size={14} strokeWidth={2.5} />
      </button>
    </header>
  );
};

export default StickyHeader;
