import GlobalNav from "@/components/layout/GlobalNav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peredelano Prices",
  description: "Compare your prices from different stores!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark:bg-gray-900 box-border bg-gray-50 overflow-y-auto min-h-screen`}
      >
        <Header />
        <GlobalNav />
        <main className="lg:pt-16 lg:pl-80">{children}</main>
      </body>
    </html>
  );
}
