import AnimatedSection from "../AnimatedSection";

const ourFeeDetail = "Entity formation, incorporation, EIN, org docs, equity setup, 83(b) guidance, H1B strategy, business plan, financials, and attorney brief.";

const govFees = [
  { category: "Entity", label: "Delaware Certificate of Incorporation", amount: "$89", note: "Higher authorized share counts increase this fee." },
  { category: "Entity", label: "Registered Agent (first year)", amount: "$50–$200", note: "Required by Delaware. Included service in Phase 1." },
  { category: "Entity", label: "EIN — IRS", amount: "$0", note: "Free." },
  { category: "Entity", label: "Foreign Qualification (if needed)", amount: "$70–$300", note: "Required if you operate in a state other than Delaware." },
  { category: "Entity", label: "Delaware Franchise Tax (annual)", amount: "$175+", note: "Due each March. Minimum with proper share structure." },
  { category: "H1B", label: "LCA Filing — Dept. of Labor", amount: "$0", note: "Required before I-129. Certified in ~7 business days." },
  { category: "H1B", label: "I-129 Base Filing Fee — USCIS", amount: "$730", note: null },
  { category: "H1B", label: "ACWIA Training Fee (≤25 employees)", amount: "$750", note: null },
  { category: "H1B", label: "Fraud Prevention & Detection Fee", amount: "$500", note: null },
  { category: "H1B", label: "Premium Processing (optional, 15 days)", amount: "$2,805", note: "Skips to front of USCIS queue." },
  { category: "H1B", label: "Attorney Filing Fee", amount: "$1,200", note: "Flat fee. Charged directly by our legal partners." },
];

const CombinedPricing = () => {
  return (
    <section id="pricing" className="py-32 border-t border-border/30 scroll-mt-14">
      <div className="section-container">
        <AnimatedSection>
          <p className="label-text mb-4 text-accent">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight mb-5">
            Everything on the table.
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed mb-16">
            No retainers. No surprises. Here is every fee you will encounter, end to end.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Our fees */}
          <AnimatedSection>
            <div className="border border-accent/25 rounded-lg p-8 h-full flex flex-col bg-card/60">
              <p className="label-text mb-8 text-accent">Our Advisory Fees</p>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">{ourFeeDetail}</p>
              </div>
              <div className="mt-6 pt-6 border-t border-border/30 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total advisory</span>
                <span className="font-heading text-2xl font-medium">$5,000</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Government fees */}
          <AnimatedSection delay={0.1}>
            <div className="border border-border/40 rounded-lg p-8 h-full flex flex-col bg-card/40">
              <p className="label-text mb-3">Government & Third-Party Fees</p>
              <p className="text-xs text-muted-foreground mb-8 leading-relaxed">
                Paid directly to government agencies and service providers.
                Not our fees — these apply regardless of who you work with.
              </p>

              {/* Entity sub-header */}
              <p className="text-[10px] uppercase tracking-[0.18em] font-medium text-muted-foreground/60 mb-3 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>Phase 1 — Entity</p>
              <div className="space-y-0 mb-6">
                {govFees.filter(r => r.category === "Entity").map((row, i, arr) => (
                  <div key={row.label} className={`py-3 text-sm ${i < arr.length - 1 ? "border-b border-border/20" : ""}`}>
                    <div className="flex justify-between items-start gap-3">
                      <span className="text-muted-foreground text-xs">{row.label}</span>
                      <span className="font-heading text-xs font-medium text-foreground flex-shrink-0">{row.amount}</span>
                    </div>
                    {row.note && <p className="text-[10px] text-muted-foreground/50 mt-0.5">{row.note}</p>}
                  </div>
                ))}
              </div>

              {/* H1B sub-header */}
              <p className="text-[10px] uppercase tracking-[0.18em] font-medium text-muted-foreground/60 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>Phase 2 — H1B</p>
              <div className="space-y-0">
                {govFees.filter(r => r.category === "H1B").map((row, i, arr) => (
                  <div key={row.label} className={`py-3 text-sm ${i < arr.length - 1 ? "border-b border-border/20" : ""}`}>
                    <div className="flex justify-between items-start gap-3">
                      <span className="text-muted-foreground text-xs">{row.label}</span>
                      <span className="font-heading text-xs font-medium text-foreground flex-shrink-0">{row.amount}</span>
                    </div>
                    {row.note && <p className="text-[10px] text-muted-foreground/50 mt-0.5">{row.note}</p>}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-border/30">
                <p className="text-xs text-muted-foreground">
                  All fees subject to change. Exact breakdown provided in your intake call.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CombinedPricing;
