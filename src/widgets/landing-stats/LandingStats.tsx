import { Text, Section, SectionContent, BlurCard } from "@/shared/ui";
import styles from "./LandingStats.module.scss";

const stats = [
  {
    number: "10K+",
    label: "Happy Users"
  },
  {
    number: "99.9%",
    label: "Uptime"
  },
  {
    number: "50%",
    label: "Time Saved"
  }
];

export const LandingStats = () => {
  return (
    <Section variant="dark" id="our-impact">
      <SectionContent>
        <Text variant="h2" color="white">
          Our Impact
        </Text>
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <BlurCard key={stat.label} variant="highlight">
              <div className={styles.statNumber}>{stat.number}</div>
              <Text color="white">{stat.label}</Text>
            </BlurCard>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
};
