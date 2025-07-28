"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/components/assets/hero/hero-image.jpg';
import collectionImage from '@/components/assets/hero/collection-image.jpg';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Index = () => {
  const t = useTranslations("common.hero");

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent("Hi! I'm interested in KENZAR fashion. Can you help me with ordering?");
    window.open(`https://wa.me/+1234567890?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-cinzel text-6xl md:text-8xl font-bold text-primary mb-6 tracking-wider">
              {t('heroTitle')}
            </h1>

            <p className="text-xl md:text-2xl text-secondary font-medium mb-4 font-inter">
              {t('heroSubtitle')}
            </p>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto font-inter">
              {t('heroDescription')}
            </p>

            <p className="text-base md:text-lg text-accent font-medium mb-12 italic font-inter">
              {t('heroTagline')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-secondary transition-elegant font-inter text-lg px-8 py-4"
              >
                <Link href="/collection">
                  {t('exploreCollection')}
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
                {t('orderNow')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Preview */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('collectionTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
              {t('collectionDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="group cursor-pointer shadow-soft hover:shadow-elegant transition-elegant border-0">
                <CardContent className="p-0">
                  <Link href={`/product/${item}`}>
                    <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                      <Image
                        src={collectionImage}
                        alt={`KENZAR Collection Item ${item}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-elegant"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-elegant" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-cinzel text-xl font-semibold text-primary mb-2 hover:text-secondary transition-quick">
                        Premium Item {item}
                      </h3>
                      <p className="text-muted-foreground font-inter">
                        Elegant streetwear piece
                      </p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/collection">
                View Full Collection
                <ArrowRight className="w-5 h-5 ml-2 rtl:rtl-flip" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rtl:lg:order-2 ltr:lg:order-1">
              <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-primary mb-6">
                {t('aboutTitle')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-inter">
                {t('aboutDescription')}
              </p>
              <Button asChild variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                <Link href="/about">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 rtl:rtl-flip" />
                </Link>
              </Button>
            </div>
            <div className="rtl:lg:order-1 ltr:lg:order-2">
              <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden shadow-elegant">
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
    </>
  );
};

export default Index;
