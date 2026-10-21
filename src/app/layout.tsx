import type { Metadata, Viewport } from "next";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} | 링크나무`,
  description: profile.bio,
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

// 첫 페인트 전에 저장된 테마(또는 시스템 설정)를 적용해 깜빡임을 막습니다.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased transition-colors dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
