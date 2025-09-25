import { LandingHeader } from "@/widgets/landing-header";
import { LandingHero } from "@/widgets/landing-hero";
import { LandingFeatures } from "@/widgets/landing-features";
import { LandingStats } from "@/widgets/landing-stats";

export const LandingPage = () => {
  return (
    <div>
      <LandingHeader />

      <main>
        <LandingHero />
        <LandingFeatures />
        <LandingStats />
      </main>
    </div>
  );
};
