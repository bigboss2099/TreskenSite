import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tresken Inc. — Intelligence, Built to Move",
  description:
    "Tresken designs and builds AI-powered software solutions for real-world logistics and transportation operations. Creator of ElyndraOS.",
  icons: {
    icon: "/tresken-mark.png",
    shortcut: "/tresken-mark.png",
  },
  openGraph: {
    title: "Tresken Inc. — Intelligence, Built to Move",
    description:
      "World-class AI-powered software for real-world logistics and transportation operations. Creator of ElyndraOS.",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tresken Inc. — Intelligence, Built to Move",
    description:
      "World-class AI-powered software for real-world logistics and transportation operations.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
