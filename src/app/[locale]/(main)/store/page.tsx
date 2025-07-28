"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, MessageCircle, Instagram, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Store = () => {
  const  t  = useTranslations("common.store");

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent("Hi! I'm interested in shopping KENZAR's online store. When will it be available?");
    window.open(`https://wa.me/+1234567890?text=${message}`, '_blank');
  };

  const comingSoonFeatures = [
    {
      title: 'Full Product Catalog',
      description: 'Browse our complete collection with detailed photos and descriptions',
    },
    {
      title: 'Secure Online Payments',
      description: 'Safe and convenient payment options including cards and digital wallets',
    },
    {
      title: 'Size Guide & Fit Finder',
      description: 'Interactive tools to help you find the perfect fit every time',
    },
    {
      title: 'Wishlist & Favorites',
      description: 'Save items you love and get notified when they go on sale',
    },
    {
      title: 'Order Tracking',
      description: 'Real-time updates on your order status from purchase to delivery',
    },
    {
      title: 'Customer Reviews',
      description: 'Read and share experiences with other KENZAR customers',
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 text-secondary rounded-full mb-8">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <h1 className="font-cinzel text-5xl md:text-6xl font-bold text-primary mb-6">
              {t('store')} Coming Soon
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter mb-8">
              We're working hard to bring you a seamless online shopping experience. 
              In the meantime, you can still order directly through WhatsApp or Instagram.
            </p>
            <div className="flex items-center justify-center space-x-2 text-secondary font-medium">
              <Clock className="w-5 h-5" />
              <span className="font-inter">Expected Launch: Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Current Ordering Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-cinzel text-4xl font-bold text-primary text-center mb-12">
            Order Now Via
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-soft hover:shadow-elegant transition-elegant border-0 cursor-pointer group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-secondary-foreground rounded-full mb-6 group-hover:scale-110 transition-elegant">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="font-cinzel text-2xl font-semibold text-primary mb-4">
                  WhatsApp
                </h3>
                <p className="text-muted-foreground font-inter mb-6">
                  Chat with us directly for personalized service, custom orders, and immediate assistance.
                </p>
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/90"
                  onClick={handleWhatsAppOrder}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start WhatsApp Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-elegant border-0 cursor-pointer group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-6 group-hover:scale-110 transition-elegant">
                  <Instagram className="w-8 h-8" />
                </div>
                <h3 className="font-cinzel text-2xl font-semibold text-primary mb-4">
                  Instagram
                </h3>
                <p className="text-muted-foreground font-inter mb-6">
                  Browse our latest collections, see styling inspiration, and place orders via DM.
                </p>
                <Button 
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  onClick={() => window.open('https://instagram.com/kenzar.wear', '_blank')}
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Visit @kenzar.wear
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-cinzel text-4xl font-bold text-primary text-center mb-12">
            What's Coming to Our Online Store
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoonFeatures.map((feature, index) => (
              <Card key={index} className="shadow-soft border-0">
                <CardContent className="p-6">
                  <h3 className="font-cinzel text-lg font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-cinzel text-4xl font-bold mb-6">
            Be the First to Know
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 font-inter">
            Want to be notified when our online store launches? Follow us on Instagram or 
            send us a WhatsApp message to join our VIP list.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open('https://instagram.com/kenzar.wear', '_blank')}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow for Updates
            </Button>
            <Button 
              size="lg"
              onClick={handleWhatsAppOrder}
              className="bg-white text-primary hover:bg-white/90"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Join VIP List
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Store;