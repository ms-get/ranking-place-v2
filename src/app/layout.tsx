import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ranking place - 다양한 물건의 순위를 매기고 비교",
  description: "다양한 물건을 비교해 주며 특징을 설명해 어떤 물건이 더 좋은 것인지 순위를 매깁니다.",
  keywords: "place, 물건 순위, rankingPlace, ranking-place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
