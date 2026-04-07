import AnimatedSection from "../AnimatedSection";

const FounderCTA = () => {
  return (
    <section className="py-32 border-t border-border/30">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <AnimatedSection>
            <p className="label-text mb-4 text-accent">Start Here</p>
            <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight mb-6">
              Let's talk about
              <br />
              your situation.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-6">
              Tell us where you are: current visa status, company structure (or if you
              haven't formed yet), and your H1B timeline. We'll tell you exactly what
              needs to happen and whether we're the right fit.
            </p>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              No sales pitch. Just a direct conversation about your path.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex items-center justify-center h-full">
              <div className="w-full max-w-sm space-y-6">
                <div className="border border-border/40 rounded-lg p-6 bg-card/50 space-y-4">
                  <p className="font-heading text-sm font-medium">Email the founder directly</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Tell us your situation — current status, company setup, and timeline.
                    We'll respond within 24 hours.
                  </p>
                  <a
                    href="mailto:sales@beyond-five.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full h-11 items-center justify-center rounded-md bg-accent text-sm font-medium font-heading text-background transition-opacity hover:opacity-90"
                  >
                    Email the Founder
                  </a>
                  <p className="text-center text-xs text-muted-foreground">sales@beyond-five.com</p>
                </div>

                <div className="border border-border/30 rounded-lg p-5 space-y-3">
                  <p className="text-xs font-heading font-medium text-foreground/70">What to have ready</p>
                  {[
                    "Your current visa status and expiry date",
                    "Company name and state of formation (if already formed)",
                    "H1B target date (primary) or current H1B employer (concurrent)",
                  ].map((item) => (
                    <div key={item} className="flex gap-2.5 text-xs text-muted-foreground">
                      <span className="mt-[5px] w-1 h-1 rounded-full bg-border flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-20 pt-8 border-t border-border/20">
          <p className="text-xs text-muted-foreground max-w-2xl leading-relaxed">
            Beyond Five Inc. provides business strategy, entity formation advisory, and H1B documentation preparation services.
            We are not a law firm and do not provide legal or tax advice. All immigration petition filing is performed by our licensed attorney partners.
            Nothing on this page constitutes legal advice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderCTA;
