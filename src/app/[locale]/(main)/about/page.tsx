import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import aboutImage from '@/components/assets/about/about-image.jpg';
import heroImage from '@/components/assets/about/hero-image.jpg';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const About = () => {
    const t = useTranslations("common.about")

    const values = [
        {
            title: t('value1Title'),
            description: t('value1Description'),
        },
        {
            title: t('value2Title'),
            description: t('value2Description'),
        },
        {
            title: t('value3Title'),
            description: t('value3Description'),
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="py-20 bg-gradient-subtle">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="rtl:lg:order-2 ltr:lg:order-1">
                            <h1 className="font-cinzel text-5xl md:text-6xl font-bold text-primary mb-6">
                                {t('aboutTitle')}
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-inter">
                                {t('aboutDescription')}
                            </p>
                            <div className="space-y-4">
                                <div className="border-l-4 border-secondary pl-6">
                                    <p className="text-lg font-medium text-secondary font-inter">
                                        "{t('heroSubtitle')}"
                                    </p>
                                </div>
                                <div className="border-l-4 border-accent pl-6">
                                    <p className="text-lg font-medium text-accent font-inter">
                                        "{t('heroDescription')}"
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="rtl:lg:order-1 ltr:lg:order-2">
                            <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-elegant">
                                <Image
                                    src={aboutImage}
                                    alt="About KENZAR"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Story */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-primary mb-12">
                            {t('storyTitle')}
                        </h2>
                        <div className="prose prose-lg max-w-none font-inter">
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t('storyParagraph1')}</p>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t('storyParagraph2')}</p>
                            <p className="text-lg text-muted-foreground leading-relaxed">{t('storyParagraph3')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-gradient-subtle">
                <div className="container mx-auto px-4">
                    <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-primary text-center mb-16">
                        {t('valuesTitle')}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <Card key={index} className="shadow-soft hover:shadow-elegant transition-elegant border-0">
                                <CardContent className="p-8 text-center">
                                    <h3 className="font-cinzel text-2xl font-semibold text-primary mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground font-inter leading-relaxed">
                                        {value.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-elegant">
                                <Image
                                    src={heroImage}
                                    alt="KENZAR Vision"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-primary mb-6">
                                {t('visionTitle')}
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-inter">{t('visionParagraph1')}</p>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-inter">{t('visionParagraph2')}</p>
                            <div className="bg-secondary/10 p-6 rounded-lg">
                                <p className="font-cinzel text-xl font-medium text-secondary italic">"{t('visionQuote')}"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;