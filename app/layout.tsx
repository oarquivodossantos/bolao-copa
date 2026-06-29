import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bolão da Família",
  description: "Bolão da Copa do Mundo 2026",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-green-50">
        {children}
      </body>
    </html>
  );
}