import ScrollFadeIn from "./ScrollFadeIn";

const stats = [
  { value: "10x", label: "FASTER DEVELOPMENT" },
  { value: "5.2", label: "MODEL VERSION" },
  { value: "99.9%", label: "CODE ACCURACY" },
  { value: "24/7", label: "AI AVAILABILITY" },
];

const StatsBlock = () => (
  <section className="py-12 px-5 md:px-6 lg:px-8">
    <ScrollFadeIn delay={0.2}>
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center py-5 border-b sm:border-b-0 sm:border-r last:border-r-0 last:border-b-0 border-border">
            <div className="text-3xl lg:text-4xl font-extrabold text-foreground mb-1">
              {s.value}
            </div>
            <div className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
    </ScrollFadeIn>
  </section>
);

export default StatsBlock;
