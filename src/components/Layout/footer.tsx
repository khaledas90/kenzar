import React from "react";
import { Instagram } from "lucide-react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("common.footer");
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="font-cinzel text-3xl font-bold mb-2">KENZAR</div>
            <p className="text-primary-foreground/70 max-w-xs">
              {t("heroSubtitle")}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center space-y-4">
            <div className="text-sm text-primary-foreground/70">
              {t("followUs")}
            </div>
            <a
              href="https://instagram.com/kenzar.wear"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rtl:space-x-reverse hover:text-secondary transition-quick"
            >
              <Instagram className="w-5 h-5" />
              <span>@kenzar.wear</span>
            </a>
          </div>

          <div className="text-center md:text-right text-sm text-primary-foreground/70">
            <p>&copy; 2024 KENZAR. {t("allRightsReserved")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
