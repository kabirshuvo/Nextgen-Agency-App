import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import AuthProvider from "@/context/AuthProvider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Promotopea",
  description: "Promoting Your Online Presence",
};

<Head>
  <link rel="icon" href="/favicon.ico" />
</Head>;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AuthProvider>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
