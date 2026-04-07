import AnimatedSection from "../AnimatedSection";

const signals = [
  { label: "Founder-specific", detail: "We work exclusively on this case type — not generic immigration" },
  { label: "Attorney-partnered", detail: "Licensed firm handles all USCIS filing. We build the case." },
  { label: "End-to-end", detail: "Entity formation through H1B approval, as one engagement" },
  { label: "Flat pricing", detail: "No retainers, no hourly billing, no surprises" },
];

const TrustBar = () => {
  return (
    <section className="border-y border-border/40 bg-card/40">
      <div className="section-container py-10">
        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {signals.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-sm font-medium text-foreground mb-1">{s.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TrustBar;
