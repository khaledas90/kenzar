"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Contact = () => {
  const t  = useTranslations("common.contact");

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(t('whatsappMessage'));
    window.open(`https://wa.me/+1234567890?text=${message}`, '_blank');
  };

  const contactMethods = [
    {
      icon: Instagram,
      title: t('instagram'),
      description: '@kenzar.wear',
      action: () => window.open('https://instagram.com/kenzar.wear', '_blank'),
      primary: true,
    },
    {
      icon: MessageCircle,
      title: t('whatsapp'),
      description: t('chatDirectly'),
      action: handleWhatsAppContact,
      primary: true,
    },
    {
      icon: Mail,
      title: t('email'),
      description: t('emailAddress'),
      action: () => window.open('mailto:info@kenzar.wear'),
      primary: false,
    },
  ];

  const businessInfo = [
    {
      icon: Clock,
      title: t('businessHoursTitle'),
      description: t('businessHours'),
    },
    {
      icon: MapPin,
      title: t('serviceAreaTitle'),
      description: t('serviceArea'),
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-cinzel text-5xl md:text-6xl font-bold text-primary mb-6">
            {t('contactTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            {t('contactDescription')}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className={`group cursor-pointer shadow-soft hover:shadow-elegant transition-elegant border-0 ${
                  method.primary ? 'ring-2 ring-secondary/20' : ''
                }`}
                onClick={method.action}
              >
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                    method.primary ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground'
                  } group-hover:scale-110 transition-elegant`}>
                    <method.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-cinzel text-xl font-semibold text-primary mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground font-inter mb-4">
                    {method.description}
                  </p>
                  <Button 
                    variant={method.primary ? "default" : "outline"}
                    className={method.primary ? "bg-secondary hover:bg-secondary/90" : "hover:text-black/50"}
                  >
                    {t('connectNow')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Business Information */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {businessInfo.map((info, index) => (
              <Card key={index} className="shadow-soft border-0">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-semibold text-primary mb-1">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground font-inter">
                      {info.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-cinzel text-4xl font-bold text-primary text-center mb-12">
            {t('faqsTitle')}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: t('faq1Question'),
                answer: t('faq1Answer'),
              },
              {
                question: t('faq2Question'),
                answer: t('faq2Answer'),
              },
              {
                question: t('faq3Question'),
                answer: t('faq3Answer'),
              },
              {
                question: t('faq4Question'),
                answer: t('faq4Answer'),
              },
            ].map((faq, index) => (
              <Card key={index} className="shadow-soft border-0">
                <CardContent className="p-6">
                  <h3 className="font-cinzel text-lg font-semibold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-primary via-secondary to-muted/30 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-cinzel text-4xl font-bold mb-6">
            {t('ctaTitle')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 font-inter">
            {t('ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open('https://instagram.com/kenzar.wear', '_blank')}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Instagram className="w-5 h-5 me-2" />
              {t('followOnInstagram')}
            </Button>
            <Button 
              size="lg"
              onClick={handleWhatsAppContact}
              className="text-white hover:bg-white hover:text-primary transition-elegant border-white border-[1px]"
            >
              <MessageCircle className="w-5 h-5 me-2" />
              {t('startWhatsAppChat')}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;