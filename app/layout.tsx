import type { Metadata } from "next";
import "./globals.css";
import { Inter, Syne } from "next/font/google";
import SmoothScroll from "@/components/ui/smooth-scroll";
import CustomCursor from "@/components/ui/custom-cursor";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const syne = Syne({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "NEO-COMMERCE | Future Retail",
  description: "Experience the next generation of digital shopping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${inter.variable} ${syne.variable} overflow-x-hidden bg-surface-100 text-text-primary`}>
        <SmoothScroll>
          <CustomCursor />
          <Header />
          <main className="min-h-screen relative pt-20 md:pt-24">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
