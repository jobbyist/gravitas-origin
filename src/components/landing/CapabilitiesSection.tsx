import { Sparkles, Github, Layers, Check, CreditCard } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";

interface CapCard {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bullets: string[];
  featured?: boolean;
}

const cards: CapCard[] = [
  {
    icon: <Sparkles size={18} />,
    title: "Natural Language Coding",
    desc: "Describe your web app in plain English. Our multi-model AI orchestration writes production-ready code instantly.",
    bullets: ["React & Tailwind Support", "Semantic HTML5"],
  },
  {
    icon: <CreditCard size={18} className="text-primary-foreground" />,
    title: "Transparent Credit System",
    desc: "No $20–$50/month subscriptions. Start free with limited credits, then pay-as-you-go from just $10.",
    bullets: ["Free Tier Available", "Pay Only What You Use"],
    featured: true,
  },
  {
    icon: <Layers size={18} />,
    title: "Multi-Model Intelligence",
    desc: "Access Claude, ChatGPT, and Gemini—similar to Bolt.new and GitHub Copilot, but with transparent pricing.",
    bullets: ["Smart Model Routing", "Context Awareness"],
  },
  {
    icon: <Github size={18} />,
    title: "One-Click Deploy",
    desc: "Push directly to GitHub repositories and trigger Vercel deployments without leaving the chat interface.",
    bullets: ["Automated Git Commits", "Live Preview URLs"],
  },
];

const CapabilitiesSection = () => (
  <section id="capabilities" className="py-16 px-5 md:px-6 lg:px-8">
    <ScrollFadeIn delay={0.1}>
    <div className="max-w-6xl mx-auto">
      <p className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-2">
        Capabilities
      </p>
      <h2 className="text-2xl lg:text-3xl font-extrabold text-foreground mb-2">
        Everything you need to ship.
      </h2>
      <p className="text-sm lg:text-base text-muted-foreground mb-8 max-w-2xl">
        From idea to live URL in minutes with transparent, affordable pricing. Gravitas Origin handles the entire
        stack.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {cards.map((c) => (
          <div
            key={c.title}
            className={`rounded-2xl border p-5 h-full ${
              c.featured ? "border-border-strong" : "border-border"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                c.featured
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground"
              }`}
            >
              {c.icon}
            </div>
            <h3 className="text-base font-bold text-foreground mb-1">
              {c.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {c.desc}
            </p>
            <div className="space-y-1.5">
              {c.bullets.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm">
                  <Check size={14} className="text-green-check flex-shrink-0" />
                  <span className="text-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </ScrollFadeIn>
  </section>
);

export default CapabilitiesSection;
