import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { useLocale } from "next-intl";
import Header from "@/components/layout/Header/Header";

export const metadata: Metadata = {
  title: "Peredelano Prices",
  description: "Compare your prices from different stores!",
};

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({ children, params }: LayoutProps) {
  const locale = useLocale();
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale} data-theme="cyberpunk" className="h-full">
      <body className="box-border bg-base-100 h-full">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
