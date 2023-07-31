import type { Metadata } from "next";
import Header from "@/components/layout/Header/Header";

import "./globals.scss";

export const metadata: Metadata = {
  title: "Peredelano Prices",
  description: "Compare your prices from different stores!",
};

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="ru" className="h-full">
      <body className="box-border bg-base-100 h-full">
        <Header />
        <main className="mx-auto container">{children}</main>
      </body>
    </html>
  );
}
