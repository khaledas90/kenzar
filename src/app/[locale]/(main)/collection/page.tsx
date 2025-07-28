"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Heart } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import collectionImage from '@/components/assets/hero/collection-image.jpg';
import Image from 'next/image';

const Collection = () => {
    const t = useTranslations("common.collection");

    const handleWhatsAppOrder = (item: string) => {
        const message = encodeURIComponent(`Hi! I'm interested in ordering ${item} from KENZAR collection. Can you help me with details and pricing?`);
        window.open(`https://wa.me/+1234567890?text=${message}`, '_blank');
    };

    const products = [
        { id: 1, name: 'Elegant Black Hoodie', category: 'Hoodies', description: 'Premium comfort with sophisticated design' },
        { id: 2, name: 'Olive Statement Tee', category: 'T-Shirts', description: 'Minimalist elegance in dark olive' },
        { id: 3, name: 'Classic Black Joggers', category: 'Bottoms', description: 'Comfort meets style' },
        { id: 4, name: 'Oversized Olive Jacket', category: 'Outerwear', description: 'Bold yet refined streetwear' },
        { id: 5, name: 'Premium Black Sweatshirt', category: 'Sweatshirts', description: 'Luxury streetwear essential' },
        { id: 6, name: 'Minimal Olive Shorts', category: 'Bottoms', description: 'Sophisticated summer essential' },
    ];

    return (
        <>
            {/* Header Section */}
            <section className="py-20 bg-gradient-subtle">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-cinzel text-5xl md:text-6xl font-bold text-primary mb-6">
                        {t('collectionTitle')}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter leading-relaxed">
                        {t('collectionDescription')}
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <Card key={product.id} className="group shadow-soft hover:shadow-elegant transition-elegant border-0">
                                <CardContent className="p-0">
                                    <Link href={`/product/${product.id}`}>
                                        <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                                            <Image
                                                src={collectionImage}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-elegant"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-elegant" />

                                            {/* Hover Actions */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-elegant">
                                                <div className="flex space-x-4">
                                                    <Button
                                                        size="sm"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleWhatsAppOrder(product.name);
                                                        }}
                                                        className="bg-white/90 text-primary hover:bg-white"
                                                    >
                                                        <MessageCircle className="w-4 h-4 mr-2" />
                                                        Order
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        onClick={(e) => e.preventDefault()}
                                                        className="bg-white/10 border-white text-white hover:bg-white/20"
                                                    >
                                                        <Heart className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <div className="p-6">
                                        <div className="text-sm text-secondary font-medium mb-2 font-inter">
                                            {product.category}
                                        </div>
                                        <Link href={`/product/${product.id}`}>
                                            <h3 className="font-cinzel text-xl font-semibold text-primary mb-2 hover:text-secondary transition-quick">
                                                {product.name}
                                            </h3>
                                        </Link>
                                        <p className="text-muted-foreground font-inter mb-4">
                                            {product.description}
                                        </p>
                                        <div className="flex space-x-2">
                                            <Button
                                                asChild
                                                variant="outline"
                                                className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                                            >
                                                <Link href={`/product/${product.id}`}>
                                                    View Details
                                                </Link>
                                            </Button>
                                            <Button
                                                className="flex-1 bg-primary hover:bg-secondary transition-elegant"
                                                onClick={() => handleWhatsAppOrder(product.name)}
                                            >
                                                <MessageCircle className="w-4 h-4 mr-2" />
                                                {t('orderNow')}
                                            </Button>
                                        </div>
                                    </div>
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
                        Custom Orders Available
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 font-inter">
                        Can't find exactly what you're looking for? We offer custom designs and personalization.
                    </p>
                    <Button
                        size="lg"
                        variant="outline"
                        onClick={() => handleWhatsAppOrder('custom design consultation')}
                        className="border-white text-white hover:bg-white hover:text-primary"
                    >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Request Custom Design
                    </Button>
                </div>
            </section>
        </>
    );
};

export default Collection;