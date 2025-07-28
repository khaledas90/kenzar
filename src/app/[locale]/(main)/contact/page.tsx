"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Contact = () => {
  const t  = useTranslations("common.contact");

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hi! I'd like to get in touch with KENZAR. How can we connect?");
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
      description: 'Chat with us directly',
      action: handleWhatsAppContact,
      primary: true,
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'info@kenzar.wear',
      action: () => window.open('mailto:info@kenzar.wear'),
      primary: false,
    },
  ];

  const businessInfo = [
    {
      icon: Clock,
      title: 'Business Hours',
      description: '9:00 AM - 8:00 PM (Local Time)',
    },
    {
      icon: MapPin,
      title: 'Service Area',
      description: 'Worldwide Shipping Available',
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
                    className={method.primary ? "bg-secondary hover:bg-secondary/90" : ""}
                  >
                    Connect Now
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
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'How can I place an order?',
                answer: 'You can place an order by contacting us via WhatsApp or Instagram. We\'ll help you choose the perfect items and arrange payment and delivery.',
              },
              {
                question: 'Do you ship internationally?',
                answer: 'Yes! We offer worldwide shipping. Shipping costs and delivery times vary by location.',
              },
              {
                question: 'What sizes are available?',
                answer: 'We offer sizes from XS to XXL. If you need custom sizing, just let us know when you contact us.',
              },
              {
                question: 'Can I customize a design?',
                answer: 'Absolutely! We love creating custom pieces. Contact us with your ideas and we\'ll work together to bring your vision to life.',
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-cinzel text-4xl font-bold mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 font-inter">
            We're here to help you find the perfect KENZAR pieces for your wardrobe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open('https://instagram.com/kenzar.wear', '_blank')}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Follow on Instagram
            </Button>
            <Button 
              size="lg"
              onClick={handleWhatsAppContact}
              className="bg-white text-primary hover:bg-white/90"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start WhatsApp Chat
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;