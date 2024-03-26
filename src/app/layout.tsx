import generalSans from "@/lib/fonts";
import "@/globals.css";
import { PropsWithChildren } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SkillGap",
  description:
    "Win money competing against the best in the world using your skill on your favourite console, mobile games  or sports. Bet on yourself,  play online or play offline at a mutual venue",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" className={`${generalSans.variable} font-general-sans`}>
      <body>{children}</body>
    </html>
  );
}
