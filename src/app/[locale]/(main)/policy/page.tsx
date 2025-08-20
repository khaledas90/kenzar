"use client"
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Truck, RotateCcw, Clock, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Policy = () => {
  const  t  = useTranslations("common.policy");

  const policies = [
    {
      icon: RotateCcw,
      title: t('returnPolicyTitle'),
      content: [
        t('returnPolicy1'),
        t('returnPolicy2'),
        t('returnPolicy3'),
        t('returnPolicy4'),
        t('returnPolicy5'),
      ],
    },
    {
      icon: Truck,
      title: t('deliveryInformationTitle'),
      content: [
        t('delivery1'),
        t('delivery2'),
        t('delivery3'),
        t('delivery4'),
        t('delivery5'),
      ],
    },
    {
      icon: Shield,
      title: t('qualityGuaranteeTitle'),
      content: [
        t('quality1'),
        t('quality2'),
        t('quality3'),
        t('quality4'),
        t('quality5'),
      ],
    },
    {
      icon: Clock,
      title: t('processingTimeTitle'),
      content: [
        t('processing1'),
        t('processing2'),
        t('processing3'),
        t('processing4'),
        t('processing5'),
      ],
    },
  ];

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(t('whatsappQuestionMessage'));
    window.open(`https://wa.me/+1234567890?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Header Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-cinzel text-5xl md:text-6xl font-bold text-primary mb-6">
            {t('policyTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            {t('introDescription')}
          </p>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-elegant border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary me-4">
                      <policy.icon className="w-6 h-6" />
                    </div>
                    <h2 className="font-cinzel text-2xl font-semibold text-primary">
                      {policy.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {policy.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 me-3 flex-shrink-0" />
                        <span className="text-muted-foreground font-inter">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-cinzel text-4xl font-bold text-primary text-center mb-12">
            {t('importantNotesTitle')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-soft border-0">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none font-inter">
                  <h3 className="font-cinzel text-xl font-semibold text-primary mb-4">
                    {t('customOrdersTitle')}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t('customOrdersParagraph')}
                  </p>

                  <h3 className="font-cinzel text-xl font-semibold text-primary mb-4">
                    {t('internationalShippingTitle')}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t('internationalShippingParagraph')}
                  </p>

                  <h3 className="font-cinzel text-xl font-semibold text-primary mb-4">
                    {t('sizeExchangeTitle')}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t('sizeExchangeParagraph')}
                  </p>

                  <h3 className="font-cinzel text-xl font-semibold text-primary mb-4">
                    {t('contactSupportTitle')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('contactSupportParagraph')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-t from-primary via-secondary to-muted/30 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-cinzel text-4xl font-bold mb-6">
            {t('ctaTitle')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 font-inter">
            {t('ctaDescription')}
          </p>
          <button
            onClick={handleWhatsAppContact}
            className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-elegant font-inter font-medium text-lg"
          >
            <MessageCircle className="w-5 h-5 me-2" />
            {t('contactSupportButton')}
          </button>
        </div>
      </section>
    </>
  );
};

export default Policy;