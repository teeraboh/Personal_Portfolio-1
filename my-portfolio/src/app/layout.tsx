import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/config/theme-provider";
import App from "@/components/layouts/app";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PORTFOLIO",
  description: "My personal PORTFOLIO website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={`${inter.className} bg-white`}>
          <App>{children}</App>
        </body>
      </ThemeProvider>
    </html>
  );
}
