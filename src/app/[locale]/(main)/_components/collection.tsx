import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { products } from "@/lib/data";

export default function Collection() {
  const t = useTranslations("common.hero");

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-primary mb-6">
            {t("collectionTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            {t("collectionDescription")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <Card
              key={item.id}
              className="group cursor-pointer shadow-soft hover:shadow-elegant transition-elegant border-0"
            >
              <CardContent className="p-0">
                <Link href={`/product/${item.id}`}>
                  <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                    <Image
                      src={item.images[0]}
                      width={500}
                      height={500}
                      alt={`KENZAR Collection Item ${item.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-elegant"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-elegant" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-cinzel text-xl line-clamp-1 font-semibold text-primary mb-2 hover:text-secondary transition-quick">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 font-inter">
                      {item.shortDescription}
                    </p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary"
          >
            <Link href="/collection">
              {t("View Full Collection")}
              <ArrowRight className="w-5 h-5 ml-2 rtl:rtl-flip" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
