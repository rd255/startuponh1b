import AnimatedSection from "../AnimatedSection";

const steps = [
  {
    num: "01",
    phase: "Phase 1",
    title: "Intake Call",
    desc: "We understand your situation: co-founders, equity split, operating state, fundraising plans, immigration status, and H1B timeline. These details shape everything.",
  },
  {
    num: "02",
    phase: "Phase 1",
    title: "Structure & Incorporate",
    desc: "We advise on share count, par value, and vesting. Then we file the Certificate of Incorporation with Delaware, set up registered agent service, and obtain your EIN.",
  },
  {
    num: "03",
    phase: "Phase 1",
    title: "Equity & Governance",
    desc: "Founder shares issued with vesting schedule. Bylaws, board resolutions, and stock ledger completed. 83(b) election guidance provided — time-sensitive, filed within 30 days.",
  },
  {
    num: "04",
    phase: "Phase 2",
    title: "H1B Strategy",
    desc: "We review your company's governance documents for USCIS compliance, determine the employer-employee framework, and map out the full petition strategy.",
  },
  {
    num: "05",
    phase: "Phase 2",
    title: "Build the Documentation",
    desc: "We write the business plan and financial projections in collaboration with you. You provide the substance. We shape it to USCIS standards.",
  },
  {
    num: "06",
    phase: "Phase 2",
    title: "LCA Filing",
    desc: "Our attorney partners file the Labor Condition Application with the Dept. of Labor (FLAG system). Free to file. Certified in ~7 business days. Required before USCIS will accept the I-129.",
  },
  {
    num: "07",
    phase: "Phase 2",
    title: "I-129 Filing",
    desc: "With certified LCA in hand, our attorneys file the I-129 petition with USCIS. We remain available for RFE strategy if needed. You have a team, not just a form-filler.",
  },
];

const phaseColors: Record<string, string> = {
  "Phase 1": "text-accent/60",
  "Phase 2": "text-accent",
};

const CombinedProcess = () => {
  return (
    <section className="py-32 border-t border-border/30">
      <div className="section-container">
        <AnimatedSection>
          <p className="label-text mb-4">End to End</p>
          <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight mb-5">
            The Full Process
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed mb-20">
            From blank slate to H1B petition filed — every step, in order.
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border/30 hidden md:block" />
          <div className="space-y-0">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.07}>
                <div className="flex gap-8 items-start py-7 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center bg-background transition-colors group-hover:border-accent/50">
                      <span className="text-xs text-muted-foreground font-heading font-medium group-hover:text-accent transition-colors">
                        {step.num}
                      </span>
                    </div>
                  </div>
                  <div className="pt-1.5">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-heading text-sm font-medium">{step.title}</h3>
                      <span className={`text-[10px] uppercase tracking-[0.15em] font-medium ${phaseColors[step.phase]}`} style={{ fontFamily: "Inter, sans-serif" }}>
                        {step.phase}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinedProcess;
