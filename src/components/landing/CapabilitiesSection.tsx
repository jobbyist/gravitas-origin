import { Sparkles, Github, Layers, Check } from "lucide-react";

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
    desc: "Describe your website in plain English. Our multi-model agent (UX Pilot, GPT, Gemini) writes semantic, accessible code.",
    bullets: ["React & Tailwind Support", "Semantic HTML5"],
  },
  {
    icon: <Github size={18} className="text-primary-foreground" />,
    title: "One-Click Deploy",
    desc: "Push directly to GitHub repositories and trigger Vercel deployments without leaving the chat interface.",
    bullets: ["Automated Git Commits", "Live Preview URLs"],
    featured: true,
  },
  {
    icon: <Layers size={18} />,
    title: "Multi-Model Intelligence",
    desc: "Leverage the specific strengths of GPT-4, UX Pilot Sonnet 4.5, and Gemini 2.5 for different parts of your codebase.",
    bullets: ["Smart Model Routing", "Context Awareness"],
  },
];

const CapabilitiesSection = () => (
  <section className="py-16 px-5">
    <div className="max-w-lg mx-auto">
      <p className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-2">
        Capabilities
      </p>
      <h2 className="text-2xl font-extrabold text-foreground mb-2">
        Everything you need to ship.
      </h2>
      <p className="text-sm text-muted-foreground mb-8">
        From idea to live URL in minutes. Gravitas Origin handles the entire
        stack.
      </p>

      <div className="space-y-4">
        {cards.map((c) => (
          <div
            key={c.title}
            className={`rounded-2xl border p-5 ${
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
  </section>
);

export default CapabilitiesSection;
