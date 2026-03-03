import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import ScrollFadeIn from "./ScrollFadeIn";
import { useState } from "react";
import EarlyAccessModal from "./EarlyAccessModal";

const codeExample = `// Generated React component
import { Card } from "@/components/ui/card";

export function PricingCard({ plan }) {
  return (
    <Card className="p-6 hover:shadow-lg">
      <h3 className="text-2xl font-bold">
        {plan.name}
      </h3>
      <div className="mt-4 flex items-baseline">
        <span className="text-4xl font-extrabold">
          \${plan.price}
        </span>
        <span className="ml-1 text-muted-foreground">
          /month
        </span>
      </div>
      <ul className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <CheckIcon /> {feature}
          </li>
        ))}
      </ul>
    </Card>
  );
}`;

const websitePrompts = [
  "Build a landing page for a coffee shop with online ordering",
  "Create a portfolio website for a freelance photographer",
  "Design a SaaS dashboard for project management",
  "Build a blog platform with markdown support",
  "Create an e-commerce store for handmade crafts",
  "Design a restaurant menu website with reservation system",
  "Build a fitness tracking app landing page",
  "Create a real estate listing website",
  "Design a music streaming service interface",
  "Build a recipe sharing platform",
  "Create a booking system for a salon",
  "Design a cryptocurrency price tracker",
  "Build a job board for remote positions",
  "Create a calendar app with event management",
  "Design a video course platform",
  "Build a prototype for a fintech platform that helps people invest money in groups",
  "Create a social media dashboard for analytics",
  "Design a travel booking website",
  "Build a pet adoption platform",
  "Create a gaming community forum",
  "Crawl my website and help me generate an SEO report",
  "Build a website wireframe for a tech startup",
  "Create a landing page with A/B testing capabilities",
  "Design a subscription box service website",
  "Build a directory for local businesses",
  "Create a donation platform for non-profits",
  "Design a meal planning app interface",
  "Build a car rental booking system",
  "Create a virtual event platform",
  "Design an online tutoring marketplace"
];

const DEFAULT_PROMPT = websitePrompts[0];

const HeroSection = () => {
  const navigate = useNavigate();
  const [promptValue, setPromptValue] = useState(DEFAULT_PROMPT);
  const [earlyAccessModalOpen, setEarlyAccessModalOpen] = useState(false);
  
  const handlePrompt = () => {
    toast("Opening chat interface...", { duration: 2000 });
    navigate("/chat");
  };

  const generateRandomPrompt = () => {
    const randomPrompt = websitePrompts[Math.floor(Math.random() * websitePrompts.length)];
    setPromptValue(randomPrompt);
    toast.success("New website idea generated!", { duration: 2000 });
  };

  return (
    <section className="grid-bg pt-24 pb-16 px-5 md:px-6 lg:px-8">
      <ScrollFadeIn>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: CTA */}
          <div className="text-center md:text-left">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border mb-8">
              <span className="w-2 h-2 rounded-full bg-green-dot" />
              <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                Powered by UX Pilot 3.5 Sonnet & GPT-4
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[2.75rem] lg:text-5xl leading-[1.05] font-extrabold tracking-tight mb-5">
              <span className="text-foreground">Automate Code.</span>
              <br />
              <span className="text-muted-foreground">Accelerate</span>
              <br />
              <span className="text-muted-foreground">Deployment.</span>
            </h1>

            {/* Subcopy */}
            <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-8 max-w-sm mx-auto md:mx-0">
              Gravitas Origin is the agentic AI coding tool that turns natural
              language into production-ready websites. Deploy instantly to Vercel &
              GitHub.
            </p>

            {/* Prompt input */}
            <div className="relative mb-3">
              <input
                type="text"
                value={promptValue}
                onChange={(e) => setPromptValue(e.target.value)}
                placeholder={DEFAULT_PROMPT}
                className="w-full h-12 pl-4 pr-14 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
              <button
                onClick={handlePrompt}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-primary flex items-center justify-center hover:opacity-90 transition-opacity active:scale-95"
              >
                <ArrowRight className="text-primary-foreground" size={16} />
              </button>
            </div>

            {/* Generate website idea button */}
            <div className="relative w-full rounded-xl p-[2px] bg-gradient-to-r from-[#0ea5e9] via-[#22c55e] to-[#0ea5e9] bg-[length:200%_100%] animate-[gradient-flow_3s_linear_infinite]">
              <button 
                onClick={generateRandomPrompt}
                className="w-full h-11 rounded-xl bg-background text-sm font-medium text-foreground hover:bg-secondary transition-colors active:scale-[0.98]"
              >
                Generate a website idea/prompt
              </button>
            </div>

            {/* Early access link */}
            <button
              onClick={() => setEarlyAccessModalOpen(true)}
              className="mt-2 text-sm text-primary hover:underline transition-colors"
            >
              Join The Early Access Waiting List
            </button>
          </div>

          {/* Right Column: Code Preview (hidden on mobile) */}
          <div className="hidden md:block">
            <div className="rounded-2xl bg-code-bg overflow-hidden border border-border shadow-lg">
              {/* Title bar */}
              <div className="flex items-center px-4 py-3 gap-2 border-b border-border/50">
                <span className="w-3 h-3 rounded-full bg-[hsl(0_84%_60%)]" />
                <span className="w-3 h-3 rounded-full bg-[hsl(45_93%_58%)]" />
                <span className="w-3 h-3 rounded-full bg-[hsl(142_71%_45%)]" />
                <span className="flex-1 text-center text-xs text-code-fg/50 font-medium">
                  PricingCard.tsx
                </span>
              </div>
              {/* Code */}
              <pre className="px-4 py-4 text-[11px] lg:text-xs leading-relaxed text-code-fg overflow-x-auto max-h-96 overflow-y-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      </ScrollFadeIn>
      <EarlyAccessModal open={earlyAccessModalOpen} onOpenChange={setEarlyAccessModalOpen} />
    </section>
  );
};

export default HeroSection;
