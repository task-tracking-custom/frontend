import { Button, Text, Section, SectionContent } from "@/shared/ui";
import NextLink from "next/link";
import styles from "./LandingHero.module.scss";

export const LandingHero = () => {
  return (
    <Section variant="gradient">
      <SectionContent>
        <Text variant="h1" color="white">
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
      </SectionContent>
    </Section>
  );
};