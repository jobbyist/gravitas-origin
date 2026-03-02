import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const HeroSection = () => {
  const handlePrompt = () => {
    toast("Demo prompt captured", { duration: 2000 });
  };

  return (
    <section className="grid-bg pt-24 pb-16 px-5">
      <div className="max-w-lg mx-auto text-center">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border mb-8">
          <span className="w-2 h-2 rounded-full bg-green-dot" />
          <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
            Powered by UX Pilot 3.5 Sonnet & GPT-4
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[2.75rem] leading-[1.05] font-extrabold tracking-tight mb-5">
          <span className="text-foreground">Automate Code.</span>
          <br />
          <span className="text-muted-foreground">Accelerate</span>
          <br />
          <span className="text-muted-foreground">Deployment.</span>
        </h1>

        {/* Subcopy */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-sm mx-auto">
          Gravitas Origin is the agentic AI coding tool that turns natural
          language into production-ready websites. Deploy instantly to Vercel &
          GitHub.
        </p>

        {/* Prompt input */}
        <div className="relative mb-3">
          <input
            type="text"
            placeholder="Build a landing page for a coffee shop..."
            className="w-full h-12 pl-4 pr-14 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20"
          />
          <button
            onClick={handlePrompt}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-primary flex items-center justify-center hover:opacity-90 transition-opacity active:scale-95"
          >
            <ArrowRight className="text-primary-foreground" size={16} />
          </button>
        </div>

        {/* View Demo button */}
        <button className="w-full h-11 rounded-xl border border-border bg-background text-sm font-medium text-foreground hover:bg-secondary transition-colors active:scale-[0.98]">
          View Demo
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
