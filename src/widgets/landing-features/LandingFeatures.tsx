import { Text, Section, SectionContent, BlurCard } from "@/shared/ui";
import styles from "./LandingFeatures.module.scss";

const features = [
  {
    title: "Time Tracking",
    description: "Track time spent on tasks with precision"
  },
  {
    title: "Team Collaboration",
    description: "Work together seamlessly with your team"
  },
  {
    title: "Progress Analytics",
    description: "Visualize your productivity with charts"
  }
];

export const LandingFeatures = () => {
  return (
    <Section variant="light" id="features">
      <SectionContent>
        <Text variant="h2" color="white">
          Features
        </Text>
        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <BlurCard key={feature.title} variant="glass">
              <Text variant="h4" color="white">
                {feature.title}
              </Text>
              <Text color="white">
                {feature.description}
              </Text>
            </BlurCard>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
};