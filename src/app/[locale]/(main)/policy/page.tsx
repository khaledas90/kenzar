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
      title: 'Return Policy',
      content: [
        'Returns accepted within 14 days of delivery',
        'Items must be unworn, unwashed, and in original condition',
        'Original tags must be attached',
        'Contact us via WhatsApp to initiate a return',
        'Customer is responsible for return shipping costs unless item is defective',
      ],
    },
    {
      icon: Truck,
      title: 'Delivery Information',
      content: [
        'Standard delivery: 3-7 business days (local)',
        'International shipping: 7-14 business days',
        'Express delivery available upon request',
        'Free local delivery on orders over $100',
        'Tracking information provided for all orders',
      ],
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      content: [
        'All items are quality-checked before shipping',
        'Defective items will be replaced or refunded',
        'We stand behind the craftsmanship of every piece',
        'If you receive a damaged item, contact us immediately',
        '100% satisfaction guarantee',
      ],
    },
    {
      icon: Clock,
      title: 'Processing Time',
      content: [
        'Standard items: 1-2 business days processing',
        'Custom orders: 5-10 business days',
        'Processing time excludes weekends and holidays',
        'You will receive a confirmation when your order ships',
        'Rush processing available for urgent orders',
      ],
    },
  ];

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hi! I have a question about KENZAR's return & delivery policy. Can you help me?");
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
            Everything you need to know about returns, delivery, and our commitment to quality.
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
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary mr-4">
                      <policy.icon className="w-6 h-6" />
                    </div>
                    <h2 className="font-cinzel text-2xl font-semibold text-primary">
                      {policy.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {policy.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
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
            Important Notes
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-soft border-0">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none font-inter">
                  <h3 className="font-cinzel text-xl font-semibold text-primary mb-4">
                    Custom Orders
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Custom-made items require additional processing time and may have different return policies. 
                    We'll discuss all details with you before confirming your custom order.
                  </p>

                  <h3 className="font-cinzel text-xl font-semibold text-primary mb-4">
                    International Shipping
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    International customers are responsible for any customs duties, taxes, or additional fees 
                    imposed by their country. These charges are not included in the product price or shipping cost.
                  </p>

                  <h3 className="font-cinzel text-xl font-semibold text-primary mb-4">
                    Size Exchange
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    If you need a different size, we offer one free size exchange within 14 days of delivery. 
                    The original item must be in perfect condition for exchange.
                  </p>

                  <h3 className="font-cinzel text-xl font-semibold text-primary mb-4">
                    Contact for Support
                  </h3>
                  <p className="text-muted-foreground">
                    For any questions about returns, exchanges, or delivery, please contact us via WhatsApp or Instagram. 
                    We're here to help make your KENZAR experience exceptional.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-cinzel text-4xl font-bold mb-6">
            Have Questions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 font-inter">
            Our team is here to help clarify any policy questions and ensure you have a great experience with KENZAR.
          </p>
          <button
            onClick={handleWhatsAppContact}
            className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-elegant font-inter font-medium text-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Contact Support
          </button>
        </div>
      </section>
    </>
  );
};

export default Policy;