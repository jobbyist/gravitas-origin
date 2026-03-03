import { useState, useEffect } from "react";
import { Eye, Box } from "lucide-react";
import VideoModal from "./VideoModal";

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 md:px-6 lg:px-8 transition-all duration-200 ${
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

      {/* Center: Navigation (hidden on mobile) */}
      <nav className="hidden md:flex items-center gap-6">
        <button
          onClick={() => scrollToSection('capabilities')}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Features
        </button>
        <button
          onClick={() => scrollToSection('models')}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Models
        </button>
        <button
          onClick={() => scrollToSection('pipeline')}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Pipeline
        </button>
      </nav>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        {/* Sign In & Get Started (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Sign In
          </button>
          <button className="px-4 py-1.5 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>

        {/* Video overview icon */}
        <button
          onClick={() => setVideoModalOpen(true)}
          className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all ${
            scrolled
              ? "bg-background border border-border shadow-sm"
              : "text-foreground/60"
          }`}
          aria-label="Watch platform overview"
        >
          <Eye size={14} strokeWidth={2.5} />
        </button>
      </div>
      <VideoModal open={videoModalOpen} onOpenChange={setVideoModalOpen} />
    </header>
  );
};

export default StickyHeader;
