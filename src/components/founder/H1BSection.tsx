import AnimatedSection from "../AnimatedSection";

const scenarios = [
  {
    tag: "Scenario A",
    title: "Primary H1B",
    desc: "Your Delaware C Corp is your sole H1B sponsor. You're on OPT, STEM OPT, L-1, or another status and need H1B as your primary work authorization.",
    callout: "Cap-subject. Lottery opens March. Petitions filed April 1.",
    note: "Formation + H1B must be complete before the April filing window.",
  },
  {
    tag: "Scenario B",
    title: "Concurrent H1B",
    desc: "You already have H1B through an employer. You want your own company to hold a concurrent H1B — to work on it part-time now or prepare for a transition.",
    callout: "No lottery. Can be filed any time of year.",
    note: "Does not affect your existing H1B with your current employer.",
  },
];

const challenges = [
  {
    num: "01",
    title: "The employer-employee problem",
    desc: "USCIS requires a genuine employer-employee relationship. When you own 100% of your company, they ask: who controls your employment? The answer is the company itself — through documented governance. Bylaws establishing board authority over officer employment, board resolutions on your compensation and role, and a clear separation between your role as officer and your role as shareholder.",
  },
  {
    num: "02",
    title: "The legitimacy test",
    desc: "USCIS wants a real, operating business — not a shell formed to get a visa. Incorporation documents, bank accounts, contracts, revenue or credible projections. Most founders have this. Most fail to present it in a way that reads clearly to an adjudicator. That's a documentation problem, not an eligibility problem.",
  },
  {
    num: "03",
    title: "The specialty occupation requirement",
    desc: "H1B requires the role be a specialty occupation requiring at least a bachelor's degree in a specific field. Your petition must define your role precisely — not as 'founder' or 'CEO', but as a specific technical or professional function that maps to your degree and the work the company does.",
  },
  {
    num: "04",
    title: "Ability to pay",
    desc: "Your company must show it can pay the prevailing wage for your role — even if you haven't been paying yourself. This is what the financial projections are for: investment history, revenue, runway, and a plan showing the company can sustain your salary going forward.",
  },
];

const deliverables = [
  { tag: "Strategy", title: "Assessment & Positioning", desc: "We review your company structure, governance, and current status. We identify gaps and build the petition strategy before a single document is written." },
  { tag: "Governance", title: "Employer-Employee Framework", desc: "We advise on the governance documentation that satisfies USCIS's employer-employee requirement for your specific corporate structure." },
  { tag: "Documentation", title: "USCIS Business Plan", desc: "A detailed business plan written for the petition: company description, your specific role, specialty occupation framing, industry context, and growth strategy." },
  { tag: "Documentation", title: "Financial Projections", desc: "Investment history, revenue to date, and forward-looking projections demonstrating ability to pay prevailing wage — built to USCIS standards." },
  { tag: "Handoff", title: "Attorney Brief + LCA Coordination", desc: "A complete brief for our legal partners. They file the LCA with DOL and the I-129 with USCIS. We're available for RFE strategy if needed." },
];

const H1BSection = () => {
  return (
    <section className="py-32 border-t border-border/30">
      <div className="section-container">
        <AnimatedSection>
          <p className="label-text mb-3 text-accent">Phase 2</p>
          <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight mb-5">
            H1B Petition Advisory
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed mb-16">
            Filing H1B through your own company is legitimate. It's also scrutinized more than
            standard petitions. Most denials aren't about eligibility — they're about how the
            case is presented.
          </p>
        </AnimatedSection>

        {/* Scenarios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
          {scenarios.map((s, i) => (
            <AnimatedSection key={s.tag} delay={i * 0.1}>
              <div className="border border-border/40 rounded-lg p-7 bg-card/50 h-full flex flex-col">
                <p className="label-text text-accent mb-4">{s.tag}</p>
                <h3 className="font-heading text-lg font-medium mb-4">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">{s.desc}</p>
                <div className="space-y-2 border-t border-border/30 pt-5">
                  <p className="text-xs font-medium font-heading text-foreground/80">{s.callout}</p>
                  <p className="text-xs text-muted-foreground">{s.note}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Challenges */}
        <AnimatedSection>
          <p className="label-text mb-3">Why founder H1B is harder</p>
          <p className="text-muted-foreground max-w-xl leading-relaxed mb-14">
            These aren't disqualifiers — they're documentation problems. Each one has a clear solution.
          </p>
        </AnimatedSection>
        <div className="relative mb-24">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border/30 hidden md:block" />
          <div className="space-y-0">
            {challenges.map((c, i) => (
              <AnimatedSection key={c.num} delay={i * 0.07}>
                <div className="flex gap-8 items-start py-7 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center bg-background transition-colors group-hover:border-accent/50">
                      <span className="text-xs text-muted-foreground font-heading font-medium group-hover:text-accent transition-colors">
                        {c.num}
                      </span>
                    </div>
                  </div>
                  <div className="pt-1.5 max-w-2xl">
                    <h3 className="font-heading text-sm font-medium mb-2">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <AnimatedSection>
          <p className="label-text mb-8">What's included in Phase 2</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {deliverables.map((d, i) => (
            <AnimatedSection key={d.title} delay={i * 0.07}>
              <div className="border border-border/40 rounded-lg p-5 bg-card/50 h-full flex flex-col">
                <p className="text-[10px] uppercase tracking-[0.18em] font-medium text-accent/70 mb-2.5" style={{ fontFamily: "Inter, sans-serif" }}>{d.tag}</p>
                <h3 className="font-heading text-sm font-medium mb-2">{d.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{d.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default H1BSection;
