import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer, BottomNav } from "@/shared/ui";
import { ThemeProvider, QueryProvider } from "@/shared/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const pretendard = localFont({
  src: "../src/shared/assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "북메이트",
  description: "함께 책을 읽고 성장하는 경험을 제공하는 소셜 독서 서비스입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.variable} ${pretendard.variable} ${pretendard.className}`} suppressHydrationWarning>
        <ThemeProvider>
          <QueryProvider>
            <div className="flex min-h-screen flex-col bg-white dark:bg-black">
              <Header />
              <main className="flex-1 pb-20 md:pb-0">{children}</main>
              <Footer />
              <BottomNav />
            </div>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
