import TranslationsProvider from "@/components/TranslationsProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import initTranslations from "../i18n";
import "./globals.css";
import { NavBar } from "./Header";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Deutsches Hafenmuseum",
  description: "itech-Projekt",
};

const namespaces = ["navbar", "std"]

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {
  const { resources } = await initTranslations(params.locale, namespaces)
  return (
    <html lang="en">
      <Head>
        <title>Deutsches Hafenmuseum</title>
        <link rel='shortcut icon' href='/favicon.ico'/>
      </Head> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TranslationsProvider
          resources={resources}
          locale={params.locale}
          namespaces={namespaces}
        >
          <NavBar />
        </TranslationsProvider>
        {children}
      </body>
    </html>
  );
}
