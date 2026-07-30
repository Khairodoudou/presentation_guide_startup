import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "دليل المؤسسات الناشئة | Startup Guide",
  description: "دليل شامل لفهم عالم Startup من الفكرة إلى التمويل - تعرف على كيفية إنشاء مشروعك الريادي خطوة بخطوة",
  keywords: "startup, مؤسسة ناشئة, ريادة أعمال, BMC, MVP, جزائر",
  authors: [{ name: "Startup Guide DZ" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col antialiased" dir="rtl">
        {children}
      </body>
    </html>
  );
}
