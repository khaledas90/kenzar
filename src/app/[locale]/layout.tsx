import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Cairo } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import Providers from "./providers";
import { Toaster } from "sonner";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Layout/header";
import Footer from "@/components/Layout/footer";

// Latin fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Arabic font (Cairo is widely supported and works well)
const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
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

  // Compose font variables based on locale
  const fontVars =
    locale === "ar"
      ? `${cairo.variable}`
      : `${geistSans.variable}`;

  // Use the Arabic font family for body if Arabic
  const bodyClass =
    "antialiased" + (locale === "ar" ? " font-[var(--font-arabic)]" : "");

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html
        lang={locale}
        dir={locale === "ar" ? "rtl" : "ltr"}
        className={fontVars}
        suppressHydrationWarning
      >
        <body className={bodyClass}>
          <Providers>
            <Header />
            <Toaster richColors position="top-right" />
            <SidebarProvider>
              <main className="pt-16">
                {children}
              </main>
            </SidebarProvider>
            <Footer />
          </Providers>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
