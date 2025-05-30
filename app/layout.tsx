import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Melih KOÇHAN - Kişisel Web Sitesi",
  description: "Melih KOÇHAN'ın kişisel web sitesi. Yazılım, projeler ve iletişim bilgileri.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/m-favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/m-favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/m-favicon-16.png" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}
