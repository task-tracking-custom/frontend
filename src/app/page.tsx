import { LandingPage } from "@/pages/landing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaskTracker - Future of Task Management | Будущее управления задачами",
  description: "Track time, collaborate with your team, and visualize productivity with TaskTracker. Join 10K+ happy users with 99.9% uptime guarantee. | Отслеживайте время, сотрудничайте с командой и визуализируйте продуктивность с TaskTracker. Присоединяйтесь к 10K+ довольных пользователей с гарантией 99.9% uptime.",
  keywords: [
    "task tracker", "time tracking", "team collaboration", "productivity", "project management",
    "трекер задач", "отслеживание времени", "командная работа", "продуктивность", "управление проектами"
  ],
  openGraph: {
    title: "TaskTracker - Future of Task Management | Будущее управления задачами",
    description: "Track time, collaborate with your team, and visualize productivity with TaskTracker. | Отслеживайте время, сотрудничайте с командой и визуализируйте продуктивность с TaskTracker.",
    type: "website",
  },
};

export default function Home() {
  return <LandingPage />;
}
