import AnimatedSection from "../AnimatedSection";

const phases = [
  {
    num: "Phase 1",
    title: "Entity Formation",
    price: "$500",
    timeline: "1–2 weeks",
    desc: "Incorporate your Delaware C Corp with the governance structure, equity setup, and documentation that both operates the company and supports your H1B petition.",
    items: [
      "Certificate of Incorporation (Delaware)",
      "Registered agent — first year included",
      "EIN from the IRS",
      "Bylaws, board resolutions, stock ledger",
      "Founder share issuance + 83(b) guidance",
    ],
  },
  {
    num: "Phase 2",
    title: "H1B Petition Advisory",
    price: "$500",
    timeline: "3–6 weeks",
    desc: "Strategy, business plan, and financial documentation for your H1B petition — built on the company formed in Phase 1. Attorney partners file with USCIS.",
    items: [
      "Corporate structure review for USCIS compliance",
      "Employer-employee framework documentation",
      "USCIS-ready business plan",
      "Financial projections + ability-to-pay proof",
      "LCA coordination + full attorney briefing",
    ],
  },
];

const PhasesOverview = () => {
  return (
    <section id="phases" className="py-32 border-t border-border/30 scroll-mt-14">
      <div className="section-container">
        <AnimatedSection>
          <p className="label-text mb-4 text-accent">The Engagement</p>
          <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight mb-5">
            Two phases. One engagement.
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed mb-16">
            The company has to exist — properly — before the H1B petition can be built.
            We run both so there's no gap between them.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/30 rounded-lg overflow-hidden">
          {phases.map((p, i) => (
            <AnimatedSection key={p.num} delay={i * 0.1}>
              <div className="bg-card p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <p className="label-text text-accent mb-2">{p.num}</p>
                    <h3 className="font-heading text-xl font-medium">{p.title}</h3>
                  </div>
                  <div className="text-right">
                    <p className="font-heading text-2xl font-medium">{p.price}</p>
                    <p className="text-xs text-muted-foreground mt-1">{p.timeline}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">{p.desc}</p>
                <ul className="space-y-3 flex-1">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-4 bg-card border border-border/30 rounded-lg px-8 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Total advisory fee</span>
              <span className="font-heading text-2xl font-medium">$1,000</span>
              <span className="text-xs text-muted-foreground">+ government fees</span>
            </div>
            <a
              href="https://wa.me/19295009884"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md bg-accent px-5 text-xs font-medium font-heading text-background transition-opacity hover:opacity-90 flex-shrink-0"
            >
              Chat with Founder
            </a>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default PhasesOverview;
