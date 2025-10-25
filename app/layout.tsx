import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Melih KOÇHAN - Windows 10 Personal Portfolio",
  description: "Melih KOÇHAN'ın Windows 10 temasında kişisel portfolyo web sitesi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" style={{ height: '100%' }}>
      <head>
        <link rel="icon" href="/m-favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/m-favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/m-favicon-16.png" />
      </head>
      <body className={inter.className} style={{ height: '100%', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
