import { Button, Text, Section, SectionContent } from "@/shared/ui";
import NextLink from "next/link";
import styles from "./LandingHero.module.scss";

export const LandingHero = () => {
  return (
    <Section variant="gradient">
      <SectionContent>
        <div itemScope itemType="https://schema.org/SoftwareApplication">
          <meta itemProp="name" content="TaskTracker" />
          <meta itemProp="applicationCategory" content="ProductivityApplication" />
          <meta itemProp="operatingSystem" content="Web Browser" />
          <Text variant="h1" color="white" itemProp="description">
            Task Tracker - Future of Task Management
          </Text>
          <Button
            as={NextLink}
            href="/login"
            className={styles.button}
            color="black"
          >
            Get Started
          </Button>
        </div>
      </SectionContent>
    </Section>
  );
};