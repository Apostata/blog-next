import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/UI/header";
import Footer from "@/components/UI/footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Headless blog - sample",
  description: "A Next.js blog with Stapi as backend and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
