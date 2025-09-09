import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Archivo, Archivo_Narrow } from "next/font/google";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivoSans = Archivo({
  variable: "--font-archivo-sans",
  subsets: ["latin"],
});

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo-narrow",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cerámicas by Ailu",
  description: "Lovemade pottery, each piece is única",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivoNarrow.variable} ${archivoSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
