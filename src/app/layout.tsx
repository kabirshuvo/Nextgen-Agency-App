import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import AuthProvider from "@/context/AuthProvider";
import Providers from "@/context/Providers";
// import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Promotopea",
  description: "Promoting Your Online Presence",
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="relative z-50" id="__next">
            <ThemeProvider attribute="class" defaultTheme="dark">
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </div>
        </Providers>
      </body>
    </html>
  );
}
