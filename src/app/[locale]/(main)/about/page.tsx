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
            title: 'Psychological Identity',
            description: 'Fashion that speaks to your inner self and expresses your unique psychological landscape.',
        },
        {
            title: 'Accessible Luxury',
            description: 'Premium quality and unique designs without the premium price tag.',
        },
        {
            title: 'Meaningful Design',
            description: 'Every piece is crafted with intention, comfort, and personal expression in mind.',
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
                            <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden shadow-elegant">
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
                            Our Story
                        </h2>
                        <div className="prose prose-lg max-w-none font-inter">
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                KENZAR was born from the belief that fashion should be more than just clothing—it should be a form of self-expression,
                                a psychological statement that reflects who you are on the inside. We understand that young adults today are looking for
                                more than just trends; they want meaning, authenticity, and pieces that resonate with their inner identity.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                Our journey began with a simple observation: you don't need to spend a fortune to wear something unique and meaningful.
                                Every piece in our collection is designed with the modern young adult in mind—someone who values comfort, appreciates
                                quality, and isn't afraid to make a statement through their style choices.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                At KENZAR, we believe in the power of psychological fashion—clothing that not only looks good but makes you feel
                                confident, comfortable, and authentically yourself. Welcome to a brand where comfort meets ostentation,
                                where every thread has meaning.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-gradient-subtle">
                <div className="container mx-auto px-4">
                    <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-primary text-center mb-16">
                        Our Values
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
                            <div className="aspect-[5/4] bg-muted rounded-lg overflow-hidden shadow-elegant">
                                <Image
                                    src={heroImage}
                                    alt="KENZAR Vision"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-primary mb-6">
                                Our Vision
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-inter">
                                We envision a world where fashion is democratized—where every young adult has access to clothing that
                                reflects their personality, values, and aspirations without breaking the bank.
                            </p>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-inter">
                                KENZAR is more than a clothing brand; we're a movement toward meaningful fashion that prioritizes
                                psychological comfort alongside physical comfort.
                            </p>
                            <div className="bg-secondary/10 p-6 rounded-lg">
                                <p className="font-cinzel text-xl font-medium text-secondary italic">
                                    "Kenzar, comfort... ostentation... meaning"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;