const steps = [
  {
    num: 1,
    title: "Describe Requirements",
    quote:
      '"Create a responsive pricing table with a toggle for monthly/yearly billing."',
  },
  {
    num: 2,
    title: "Review Generated Code",
    quote:
      '"Inspect the React components and Tailwind classes generated in real-time."',
  },
  {
    num: 3,
    title: "Deploy to Production",
    quote:
      '"One click to push to main branch and trigger Vercel build."',
  },
];

const codeSnippet = `export const PricingCard = ({ plan }) => {
  return (
    <div className="rounded-2xl border p-6">
      <h3 className="text-lg font-bold">
        {plan.name}
      </h3>
      <p className="text-3xl font-extrabold mt-2">
        \${plan.price}
        <span className="text-sm text-muted">
          /mo
        </span>
      </p>
      <ul className="mt-4 space-y-2">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2">
            <Check size={16} /> {f}
          </li>
        ))}
      </ul>
    </div>
  );
};`;

const StepsSection = () => (
  <section className="py-16 px-5">
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-extrabold text-foreground mb-2">
        Designed for Developers,
        <br />
        Powered by AI.
      </h2>
      <p className="text-sm text-muted-foreground leading-relaxed mb-8">
        Gravitas Origin isn't just a chatbot. It's a full development
        environment that understands file structures, dependencies, and
        deployment pipelines.
      </p>

      {/* Steps */}
      <div className="space-y-5 mb-8">
        {steps.map((s) => (
          <div key={s.num} className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
              {s.num}
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground mb-0.5">
                {s.title}
              </h4>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                {s.quote}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Code window */}
      <div className="rounded-2xl bg-code-bg overflow-hidden border border-border">
        {/* Title bar */}
        <div className="flex items-center px-4 py-3 gap-2">
          <span className="w-3 h-3 rounded-full bg-[hsl(0_84%_60%)]" />
          <span className="w-3 h-3 rounded-full bg-[hsl(45_93%_58%)]" />
          <span className="w-3 h-3 rounded-full bg-[hsl(142_71%_45%)]" />
          <span className="flex-1 text-center text-xs text-code-fg/50 font-medium">
            PricingCard.tsx
          </span>
        </div>
        {/* Code */}
        <pre className="px-4 pb-4 text-[11px] leading-relaxed text-code-fg overflow-x-auto">
          <code>{codeSnippet}</code>
        </pre>
      </div>
    </div>
  </section>
);

export default StepsSection;
