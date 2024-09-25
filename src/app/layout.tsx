import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const wwDigital = localFont({
  src: "./fonts/wwDigital.ttf",
  variable: "--font-wwDigital",
  weight: "100 900",
});
const fakeReceipt = localFont({
  src: "./fonts/fakeReceipt.otf",
  variable: "--font-fakeReceipt",
  weight: "100 900",
});
const barCode = localFont({
  src: "./fonts/barCodeFont.ttf",
  variable: "--font-barCode",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio TDURANDP",
  description: "Portfolio TDURANDP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${wwDigital.variable} ${fakeReceipt.variable} ${barCode.variable} antialiased`}>
          {children}
      </body>
    </html>
  );
}
