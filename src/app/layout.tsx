import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import AuthProvider from "@/context/AuthProvider";
import Providers from "@/context/Providers";
import { SessionSync } from "@/components/redux/SessionSync";
import ErrorBoundary from "@/components/ErrorBoundary";
import Loading from "@/components/Loading";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Promotopea",
  description: "Promoting Your Online Presence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ErrorBoundary>
          <Providers>
            <SessionSync />
            <div className="relative z-50" id="__next">
              <ThemeProvider attribute="class" defaultTheme="dark">
                <Header />
                <Suspense fallback={<Loading />}>{children}</Suspense>
                <Footer />
              </ThemeProvider>
            </div>
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
