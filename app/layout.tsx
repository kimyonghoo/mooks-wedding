// app/layout.tsx
import type { Metadata } from "next";
// Inter 대신 Gowun_Dodum 폰트 가져오기
import { Gowun_Dodum } from "next/font/google";
import "./globals.css";

// 감성적인 손글씨 느낌의 고운돋움체 적용 (weight 지정 필요)
const gowunDodum = Gowun_Dodum({
  subsets: ["latin"],
  weight: ["400"], // 기본 두께
  variable: "--font-gowun", // Tailwind에서 쓸 변수명
});

export const metadata: Metadata = {
  title: "박형묵 & 문원영 결혼합니다",
  description: "2025년 4월 18일, 저희의 시작을 축복해주세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      {/* body에 폰트 클래스 적용 */}
      <body className={gowunDodum.className}>{children}</body>
    </html>
  );
}