"use client";
import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Home, Layers, Info, Phone, Shield } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import SwitchLang from "../SwitchLang";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const locale = useMemo(() => {
    const parts = (pathname || "").split("/");
    return parts[1] || "en";
  }, [pathname]);
  const t = useTranslations("common.header");
  const navItems = [
    { href: "/", label: t("home"), icon: Home },
    { href: "/collection", label: t("collection"), icon: Layers },
    { href: "/about", label: t("about"), icon: Info },
    { href: "/contact", label: t("contact"), icon: Phone },
    { href: "/policy", label: t("policy"), icon: Shield },
  ];

  const NavLinks = ({ mobile = false }) => {
    const parts = (pathname || "").split("/");
    const currentPath = "/" + parts.slice(2).join("/");
    return (
      <>
        {navItems.map((item) => {
          const isActive = currentPath === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                mobile
                  ? `group flex items-center gap-3 rounded-md px-3 py-3 text-base transition-all hover:bg-muted/50 ${
                      isActive ? "text-secondary" : "text-foreground"
                    }`
                  : `inline-block transition-elegant hover:text-[#252219] ${
                      isActive ? "text-secondary font-medium" : "text-foreground"
                    }`
              }
              onClick={mobile ? () => setIsOpen(false) : undefined}
            >
              {mobile && Icon ? (
                <Icon
                  className={`h-5 w-5 ${
                    isActive ? "text-secondary" : "text-muted-foreground"
                  } group-hover:text-foreground transition-colors`}
                />
              ) : null}
              <span className={mobile ? "flex-1" : undefined}>{item.label}</span>
            </Link>
          );
        })}
      </>
    );
  };
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
                <Button
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full border-border/60 bg-background/60 backdrop-blur-sm shadow-sm hover:bg-background hover:shadow-md transition-all"
                >
                  {isOpen ? (
                    <X className="h-5 w-5 transition-transform duration-300" />
                  ) : (
                    <Menu className="h-5 w-5 transition-transform duration-300" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side={locale === "ar" ? "left" : "right"}
                className="w-[60vw] sm:max-w-sm p-0 bg-background/95 backdrop-blur-md"
                hideClose
              >
                <div className="px-5 py-4 border-b border-border bg-gradient-to-b from-background/80 to-background/40">
                  <div className="flex items-center justify-between">
                    <div className="font-cinzel text-xl font-bold text-primary">KENZAR</div>
                    <SwitchLang />
                  </div>
                </div>
                <div className="px-2 py-3">
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
