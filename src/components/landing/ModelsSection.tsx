import { Code2, Sparkles, Feather, Braces } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";

const models = [
  {
    icon: <Code2 size={18} className="text-primary-foreground" />,
    bg: "bg-primary",
    name: "GPT-5.2 Thinking",
    sub: "OpenAI",
  },
  {
    icon: <Sparkles size={18} className="text-primary-foreground" />,
    bg: "bg-[hsl(270_60%_55%)]",
    name: "Gemini 3 Pro",
    sub: "Google AI Studio",
  },
  {
    icon: <Feather size={18} className="text-primary-foreground" />,
    bg: "bg-[hsl(25_90%_55%)]",
    name: "Claude Code",
    sub: "by Anthropic",
  },
  {
    icon: <Braces size={18} className="text-primary-foreground" />,
    bg: "bg-[hsl(210_80%_50%)]",
    name: "Origin v1.0",
    sub: "by Gravitas",
  },
];

const ModelsSection = () => (
  <section id="models" className="py-16 px-5 md:px-6 lg:px-8">
    <ScrollFadeIn delay={0.2}>
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-2xl lg:text-3xl font-extrabold text-foreground mb-2">
        Powered by Frontier AI Agentic Models
      </h2>
      <p className="text-sm lg:text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
        We aggregate the best AI models with advanced reasoning and coding capabilities to ensure optimal code generation.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        {models.map((m) => (
          <div
            key={m.name}
            className="rounded-2xl border border-border p-5 flex flex-col items-center text-center hover:border-border-strong transition-colors"
          >
            <div
              className={`w-10 h-10 rounded-full ${m.bg} flex items-center justify-center mb-3`}
            >
              {m.icon}
            </div>
            <h3 className="text-sm font-bold text-foreground mb-0.5">
              {m.name}
            </h3>
            <p className="text-xs text-muted-foreground">{m.sub}</p>
          </div>
        ))}
      </div>
    </div>
    </ScrollFadeIn>
  </section>
);

export default ModelsSection;
