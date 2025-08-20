"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import heroImage from "@/components/assets/hero/hero-image.jpg";
export default function Hero() {
  const t = useTranslations("common.hero");
  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in KENZAR fashion. Can you help me with ordering?"
    );
    window.open(`https://wa.me/+1234567890?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-secondary" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-cinzel text-6xl md:text-8xl font-bold text-primary mb-6 tracking-wider">
            {t("heroTitle")}
          </h1>

          <p className="text-xl md:text-2xl text-secondary font-medium mb-4 font-inter">
            {t("heroSubtitle")}
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto font-inter">
            {t("heroDescription")}
          </p>

          <p className="text-base md:text-lg text-accent font-medium mb-12 italic font-inter">
            {t("heroTagline")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-[#fff] transition-elegant font-inter text-lg px-8 py-4"
            >
              <Link href="/collection">
                {t("exploreCollection")}
                <ArrowRight className="w-5 h-5 ml-2 rtl:rtl-flip" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleWhatsAppOrder}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-elegant font-inter text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t("orderNow")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
