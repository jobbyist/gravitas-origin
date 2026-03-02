const stats = [
  { value: "10x", label: "FASTER DEVELOPMENT" },
  { value: "5.2", label: "MODEL VERSION" },
  { value: "99.9%", label: "CODE ACCURACY" },
  { value: "24/7", label: "AI AVAILABILITY" },
];

const StatsBlock = () => (
  <section className="py-12 px-5">
    <div className="max-w-sm mx-auto divide-y divide-border">
      {stats.map((s) => (
        <div key={s.label} className="py-5 text-center">
          <div className="text-3xl font-extrabold text-foreground mb-1">
            {s.value}
          </div>
          <div className="text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBlock;
