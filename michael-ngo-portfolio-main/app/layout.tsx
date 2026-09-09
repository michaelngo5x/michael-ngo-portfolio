import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Ngo | Bid Manager & Proposal Strategist",
  description: "Portfolio of Michael Ngo, a bid management and proposal professional specializing in procurement analysis, business intelligence, and process improvement.",
  openGraph: { title: "Michael Ngo | Bid Manager & Proposal Strategist", description: "Personal portfolio featuring bid management, proposal development, procurement analysis, and process improvement work.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Michael Ngo | Bid Manager & Proposal Strategist", description: "Personal portfolio featuring bid management, proposal development, procurement analysis, and process improvement work.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
