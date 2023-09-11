import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Satyam Singh | Developer",
  description:
    "Hi! Welcome to my portfolio. I'm Satyam Singh. Discover the intersection of technology and creativity inside. Explore my work, skills, and experiences. Let's connect and bring your ideas to life.",
  authors: [{ name: "Satyam Singh" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
