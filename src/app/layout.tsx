import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Playwrite_BR } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
});

const playwrite = Playwrite_BR({
  variable: "--font-playwrite",
});

export const metadata: Metadata = {
  title: "Expense app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
