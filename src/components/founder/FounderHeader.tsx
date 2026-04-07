const FounderHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="section-container flex h-14 items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-heading text-sm font-medium tracking-tight text-foreground">
            StartupOnH1B
          </span>
          <span className="hidden sm:block text-border/60">|</span>
          <span className="hidden sm:block label-text text-accent" style={{ letterSpacing: "0.15em" }}>
            Founder H1B Advisory
          </span>
        </div>
        <a
          href="mailto:sales@beyond-five.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-8 items-center rounded-md bg-accent px-4 text-xs font-medium font-heading text-background transition-opacity hover:opacity-90"
        >
          Email the Founder
        </a>
      </div>
    </header>
  );
};

export default FounderHeader;
