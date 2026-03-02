import { CheckCircle2 } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";

const items = [
  {
    title: "GitHub Integration",
    desc: "Push commits, create PRs, and manage branches directly from the chat.",
  },
  {
    title: "Vercel Deployments",
    desc: "Instant preview URLs and production builds triggered automatically.",
  },
  {
    title: "Custom Domains",
    desc: "Connect your own domains and manage DNS settings.",
  },
];

const PipelineSection = () => (
  <section className="py-16 px-5 grid-bg">
    <ScrollFadeIn delay={0.25}>
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-extrabold text-foreground mb-2">
        Seamless Deployment Pipeline
      </h2>
      <p className="text-sm text-muted-foreground mb-8">
        Don't just generate code snippets. Gravitas Origin integrates directly
        with your production environment.
      </p>

      <div className="space-y-5">
        {items.map((it) => (
          <div key={it.title} className="flex gap-3">
            <CheckCircle2
              size={20}
              className="text-foreground flex-shrink-0 mt-0.5"
              fill="hsl(var(--foreground))"
              stroke="hsl(var(--background))"
            />
            <div>
              <h4 className="text-sm font-bold text-foreground mb-0.5">
                {it.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {it.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </ScrollFadeIn>
  </section>
);

export default PipelineSection;
