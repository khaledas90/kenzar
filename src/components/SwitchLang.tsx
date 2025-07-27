"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";

export default function SwitchLang() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = pathname.startsWith("/ar") ? "ar" : "en";
  const newLang = currentLang === "en" ? "ar" : "en";

  const toggleLanguage = () => {
    const newPath =
      pathname === "/"
        ? `/${newLang}`
        : pathname.replace(/^\/(ar|en)/, `/${newLang}`);

    router.push(newPath);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="transition-quick"
    >
      <Globe className="w-4 h-4 mr-2" />
      {currentLang.toUpperCase()}
    </Button>
  );
}
