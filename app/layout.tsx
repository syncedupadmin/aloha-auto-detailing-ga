import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });
const siteUrl = "https://aloha-auto-detailing-ga.vercel.app";

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#071311" };
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aloha Auto Detailing | Mobile Detailing in Peachtree City, GA",
  description: "Interior detailing, full details, paint correction and ceramic coating delivered with meticulous care in Peachtree City and nearby communities.",
  alternates: { canonical: siteUrl },
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    title: "Aloha Auto Detailing",
    description: "Your car, cared for at your place.",
    url: siteUrl,
    siteName: "Aloha Auto Detailing",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Aloha Auto Detailing in Peachtree City, Georgia" }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${display.variable} ${body.variable}`}><body>{children}</body></html>;
}
