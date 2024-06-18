import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.scss";

import { ThemeModeScript } from "flowbite-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Matheus Nunes",
  description: "Portifólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        {children} <ToastContainer />
      </body>
    </html>
  );
}
