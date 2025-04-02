import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/components/header/Header";
import { HeaderTop } from "@/components/header/header-top/HeaderTop";

export const metadata: Metadata = {
  title: "Venera Shop | Главная",
  description: "Интернет-магазин",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <HeaderTop />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
