import React from "react";
import Link from "next/link";
import { Instagram, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("common.footer");
  const tContact = useTranslations("common.contact");
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/collection", label: t("collection") },
    { href: "/policy", label: t("policy") },
    { href: "/contact", label: t("contact") },
    { href: "/about", label: t("about") },
  ];

  return (
    <footer className="relative bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-10 gradient-hero pointer-events-none" aria-hidden />

      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          {/* Brand & tagline */}
          <div className="md:col-span-5 text-center md:text-start">
            <div className="font-cinzel text-3xl font-bold tracking-wide">KENZAR</div>
            <p className="mt-3 text-primary-foreground/75 max-w-md mx-auto md:mx-0">
              {t("heroSubtitle")}
            </p>

            <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
              <span className="text-sm text-primary-foreground/70">{t("followUs")}</span>
              <a
                href="https://instagram.com/kenzar.wear"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary/40 px-3 py-1.5 text-sm hover:bg-primary/30 hover:text-secondary transition-elegant"
              >
                <Instagram className="h-4 w-4" />
                <span>@kenzar.wear</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4">
            <ul className="grid grid-cols-2 gap-3 max-w-xs mx-auto md:mx-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-secondary transition-quick"
                  >
                    <span className="underline-offset-4 group-hover:underline">{link.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-quick" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="md:col-span-3">
            <Link
              href="/contact"
              className="block rounded-lg border border-primary-foreground/15 bg-primary/30 p-4 shadow-soft hover:shadow-elegant transition-elegant"
            >
              <div className="text-sm text-primary-foreground/70">{t("contact")}</div>
              <div className="mt-1 font-medium">KENZAR</div>
              <div className="mt-2 inline-flex items-center gap-2 text-sm text-secondary">
                <span>{tContact("contactTitle")}</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/70">&copy; {year} KENZAR. {t("allRightsReserved")}</p>
          <div className="text-xs text-primary-foreground/50">Made with care for minimalist streetwear</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
