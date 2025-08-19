"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import SwitchLang from "../SwitchLang";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [locale] = usePathname();
  const t = useTranslations("common.header");
  const navItems = [
    { href: "/", label: t("home") },
    { href: "/collection", label: t("collection") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
    { href: "/policy", label: t("policy") },
  ];

  const NavLinks = ({ mobile = false }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`  ${
            mobile ? "block py-3 px-1.5 text-lg" : "inline-block "
          } transition-elegant hover:text-[#252219] ${
            usePathname() === item.href
              ? "text-secondary font-medium"
              : "text-foreground"
          }`}
          onClick={mobile ? () => setIsOpen(false) : undefined}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-cinzel text-2xl font-bold text-primary"
          >
            KENZAR
          </Link>

          <div className="hidden md:flex items-center space-x-8 ">
            <NavLinks />
          </div>
          <div className="flex items-center space-x-4 ">
            <SwitchLang />

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side={locale === "ar" ? "left" : "right"}
                className="w-64"
              >
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="font-cinzel text-xl font-bold text-primary mb-4">
                    KENZAR
                  </div>
                  <NavLinks mobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
