import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Header from "@/components/nav/Header";
import Footer from "@/components/nav/Footer";

// Initialize Inter font
const inter = Inter({ subsets: ["latin"] });

// Define metadata for the site
export const metadata: Metadata = {
  title: "Portfolio",
  description: "A glimpse into my work and skills",
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>

  );
}