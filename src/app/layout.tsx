import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ThemeProvider
} from "@mui/material";
import type { Viewport } from 'next'

import { theme } from "./_theme/theme"
import BackgroundImg from "./_components/BackgroundImg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A Song of Ice and Fire Deathlist",
  description: "An Interface of Ice and Fire",
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <BackgroundImg />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
