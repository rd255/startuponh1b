import AnimatedSection from "../AnimatedSection";

const whyItems = [
  {
    title: "Required for VC investment",
    desc: "Most institutional investors require a Delaware C Corp. LLCs create tax complications for fund structures. If you plan to raise, this is non-negotiable.",
  },
  {
    title: "Correct structure for H1B sponsorship",
    desc: "Delaware C Corps have the board governance and officer structure USCIS looks for in founder petitions. Forming properly now directly strengthens your H1B case.",
  },
  {
    title: "Full equity flexibility",
    desc: "Multiple share classes, preferred stock for investors, option plans for employees. The standard equity machinery — built in from the start.",
  },
  {
    title: "Most established corporate law in the US",
    desc: "Attorneys, investors, and courts all operate within Delaware's framework. You don't need to be in Delaware — you just need to be incorporated there.",
  },
];

const deliverables = [
  {
    tag: "Filing",
    title: "Certificate of Incorporation",
    desc: "Prepared and filed with Delaware. Share structure optimized to keep annual franchise tax at the minimum.",
  },
  {
    tag: "Compliance",
    title: "Registered Agent",
    desc: "First year of Delaware registered agent service. Required — all Delaware corporations must maintain one.",
  },
  {
    tag: "Federal",
    title: "EIN",
    desc: "Employer Identification Number from the IRS. Required for banking, hiring, and taxes. We obtain it for you.",
  },
  {
    tag: "Governance",
    title: "Organizational Documents",
    desc: "Bylaws, initial board resolutions, stock ledger. These establish governance and are required by USCIS for your H1B.",
  },
  {
    tag: "Equity",
    title: "Founder Share Issuance",
    desc: "Paperwork to issue your founder shares with vesting schedule. Properly documented from day one.",
  },
  {
    tag: "Tax",
    title: "83(b) Election Guidance",
    desc: "Must be filed within 30 days of share grant. Commonly missed. Can save significant tax if your company's value grows. We walk you through it.",
  },
];

const EntitySection = () => {
  return (
    <section className="py-32 border-t border-border/30">
      <div className="section-container">
        <AnimatedSection>
          <p className="label-text mb-3 text-accent">Phase 1</p>
          <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight mb-5">
            Delaware C Corp Formation
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed mb-20">
            Most US startups incorporate in Delaware regardless of where they operate.
            The governance structure it creates is exactly what both investors and USCIS look for.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {whyItems.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.07}>
              <div className="border border-border/40 rounded-lg p-6 bg-card/50 h-full">
                <h3 className="font-heading text-sm font-medium mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <p className="label-text mb-8">What's included in Phase 1</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {deliverables.map((d, i) => (
            <AnimatedSection key={d.title} delay={i * 0.06}>
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

export default EntitySection;
