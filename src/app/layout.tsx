import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Footer } from "@/components/Footer";

const noto = Noto_Sans_JP({
  weight: "400",
  preload: true,
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "第94回灘校体育祭 進",
  description: "第94回灘校体育祭公式サイトです。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={noto.className}>
        <Header />
        <div className="min-h-screen">
          <div className="h-16"></div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
