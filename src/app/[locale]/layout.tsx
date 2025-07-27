import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import Providers from "./providers";
import { Toaster } from "sonner";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Layout/header";
import Footer from "@/components/Layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {};

export async function generateStaticParams() {
  const locales = ["en", "ar"];
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages({ locale }).catch(() => ({}));

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html
        lang={locale}
        dir={locale === "ar" ? "rtl" : "ltr"}
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <body className="antialiased">
          <Providers>
            <Header />
            <Toaster richColors position="top-right" />
            <SidebarProvider>{children}</SidebarProvider>
            <Footer />
          </Providers>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
