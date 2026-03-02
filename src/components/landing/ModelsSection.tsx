import { Code2, Sparkles, Feather, Braces } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";

const models = [
  {
    icon: <Code2 size={18} className="text-primary-foreground" />,
    bg: "bg-primary",
    name: "GPT-4 Codex",
    sub: "UX Pilot AI",
  },
  {
    icon: <Sparkles size={18} className="text-primary-foreground" />,
    bg: "bg-[hsl(270_60%_55%)]",
    name: "Gemini 2.5",
    sub: "Google DeepMind",
  },
  {
    icon: <Feather size={18} className="text-primary-foreground" />,
    bg: "bg-[hsl(25_90%_55%)]",
    name: "UX Pilot 3.5 Sonnet",
    sub: "UX Pilot AI",
  },
  {
    icon: <Braces size={18} className="text-primary-foreground" />,
    bg: "bg-[hsl(210_80%_50%)]",
    name: "Gravitas 5.2",
    sub: "Proprietary",
  },
];

const ModelsSection = () => (
  <section id="models" className="py-16 px-5 md:px-6 lg:px-8">
    <ScrollFadeIn delay={0.2}>
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-2xl lg:text-3xl font-extrabold text-foreground mb-2">
        Powered by Frontier Models
      </h2>
      <p className="text-sm lg:text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
        We aggregate the best AI models to ensure optimal code generation.
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
