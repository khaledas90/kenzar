import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroImage from "@/components/assets/hero/hero-image.jpg";
export default function About() {
  const t = useTranslations("common.hero");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rtl:lg:order-2 ltr:lg:order-1">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-primary mb-6">
              {t("aboutTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-inter">
              {t("aboutDescription")}
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#252219] text-[#252219] hover:bg-[#252219] hover:text-secondary"
            >
              <Link href="/about">
                {t("Learn More")}
                <ArrowRight className="w-5 h-5 ml-2 rtl:rtl-flip" />
              </Link>
            </Button>
          </div>
          <div className="rtl:lg:order-1 ltr:lg:order-2">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-elegant">
              <Image
                src={heroImage}
                alt="About KENZAR"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
