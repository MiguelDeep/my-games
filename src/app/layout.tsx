import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dely Games - Descubra jogos incriveis.",
  description: "Mais de 10mil jogos separados e organizados.",
  keywords:["Games","jogos"],
  openGraph:{
    images:[`${process.env.PROJECT_URL}/preview.png`]
  },
  robots:{
    index:true, 
    follow:true,
    nocache:true,
    googleBot:{
      index:true,
      follow:true,
      noimageindex:true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
