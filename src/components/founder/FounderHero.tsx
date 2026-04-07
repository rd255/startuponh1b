import { motion } from "framer-motion";

const FounderHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(36 40% 15% / 0.6), transparent 65%)" }}
      />

      <div className="section-container relative z-10 py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl"
        >
          <p className="label-text mb-6 text-accent">Founder H1B Advisory</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-medium tracking-tight leading-[1.05] mb-8">
            H1B Through
            <br />
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, hsl(36 62% 64%), hsl(36 40% 44%))",
              }}
              className="bg-clip-text text-transparent"
            >
              Your Own Company
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-5 font-body">
            Yes — founders can sponsor themselves for H1B. It requires the right
            corporate structure, a strong business case, and careful documentation.
            That's exactly what we build.
          </p>
          <p className="text-sm text-muted-foreground max-w-xl leading-relaxed mb-12 font-body">
            We handle the entity, the strategy, and the case. Our attorney partners handle the filing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:sales@beyond-five.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-7 text-sm font-medium font-heading text-background transition-opacity hover:opacity-90"
            >
              Email the Founder
            </a>
            <a
              href="#phases"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border/60 px-7 text-sm font-medium font-heading text-foreground transition-colors hover:bg-card"
            >
              See How It Works
            </a>
          </div>
        </motion.div>

        {/* Timeline teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 flex flex-col sm:flex-row gap-0 max-w-2xl"
        >
          {[
            { num: "01", label: "Form the entity" },
            { num: "02", label: "Build the case" },
            { num: "03", label: "File H1B" },
          ].map((item, i, arr) => (
            <div key={item.num} className="flex items-center flex-1">
              <div className="flex items-center gap-3">
                <span className="text-xs font-heading text-accent/60">{item.num}</span>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
              {i < arr.length - 1 && (
                <div className="hidden sm:block flex-1 mx-4 h-px bg-border/40" />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {[20, 40, 60, 80].map((pct) => (
          <div key={pct} className="grid-line" style={{ left: `${pct}%` }} />
        ))}
      </div>
    </section>
  );
};

export default FounderHero;
