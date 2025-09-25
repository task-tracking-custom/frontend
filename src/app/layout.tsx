import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "@/shared/ui/reset.scss";
import "@/shared/ui/styled.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Task Tracker - Управление задачами и проектами",
    template: "%s | Task Tracker",
  },
  description:
    "Профессиональное приложение для отслеживания задач и управления проектами с оценкой времени, усилий и прогресса. Повышайте продуктивность команды.",
  keywords: [
    "task tracker",
    "управление задачами",
    "проекты",
    "планирование",
    "продуктивность",
    "команда",
    "отслеживание времени",
    "прогресс",
    "task management",
    "project management",
    "productivity",
    "time tracking",
  ],
  authors: [{ name: "Task Tracker Team" }],
  creator: "Task Tracker Team",
  publisher: "Task Tracker",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  alternates: {
    canonical: "/",
    languages: {
      "ru-RU": "/ru",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    title: "Task Tracker - Управление задачами и проектами",
    description:
      "Профессиональное приложение для отслеживания задач и управления проектами с оценкой времени, усилий и прогресса.",
    siteName: "Task Tracker",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Task Tracker - Управление задачами",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
