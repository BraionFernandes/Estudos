import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo Básico com Next.js",
  description: "Todo Básico Apenas Front-end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
