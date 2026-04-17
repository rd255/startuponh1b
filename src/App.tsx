import { Analytics } from "@vercel/analytics/react";
import FounderHeader from "./components/founder/FounderHeader";
import FounderHero from "./components/founder/FounderHero";
import TrustBar from "./components/founder/TrustBar";
import PhasesOverview from "./components/founder/PhasesOverview";
import EntitySection from "./components/founder/EntitySection";
import H1BSection from "./components/founder/H1BSection";
import CombinedProcess from "./components/founder/CombinedProcess";
import CombinedPricing from "./components/founder/CombinedPricing";
import FounderCTA from "./components/founder/FounderCTA";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FounderHeader />
      <main className="pt-14">
        <FounderHero />
        <TrustBar />
        <PhasesOverview />
        <EntitySection />
        <H1BSection />
        <CombinedProcess />
        <CombinedPricing />
        <FounderCTA />
      </main>
      <Analytics />
    </div>
  );
}

export default App;
