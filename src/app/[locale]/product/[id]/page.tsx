"use client";
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Heart,
  Share2,
  ArrowLeft,
  Ruler,
  Truck,
  Shield,
  Star,
  Info,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { products } from "@/lib/data";

interface Product {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  material: {
    main: string;
    lining: string;
    season: string;
  };
  price: number;
  currency: string;
  sizes: string[];
  images: any[];
}

const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};
const findProductBySlug = (
  products: Record<string, Product>,
  slug: string
): Product | undefined => {
  return Object.values(products).find((product) => product.id === slug);
};

const ProductDetails: React.FC = () => {
  const { id } = useParams() as { id: string };

  console.log(id);

  const t = useTranslations("common.productDetails");
  const locale = useLocale();
  const isRTL: boolean =
    locale === "ar" || locale === "he" || locale === "fa" || locale === "ur";

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  const reviewsRef = useRef<HTMLDivElement | null>(null);

  const productsObject = products.reduce(
    (acc: Record<string, Product>, product) => {
      acc[product.id] = product;
      return acc;
    },
    {}
  );

  const product: Product | undefined = findProductBySlug(productsObject, id);

  console.log(product);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-cinzel text-4xl font-bold text-primary mb-4">
            Product Not Found
          </h1>
          <Link
            href="/collection"
            className="text-secondary hover:text-secondary/80 underline"
          >
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppOrder = (): void => {
    const productName: string = product.name;
    const size: string = selectedSize ? ` (Size: ${selectedSize})` : "";
    const message: string = encodeURIComponent(
      `Hi! I'm interested in ordering the ${productName}${size} from KENZAR. Can you help me with details and pricing?`
    );
    window.open(`https://wa.me/+201024657204?text=${message}`, "_blank");
  };

  const handleShare = (): void => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: "Check out this amazing piece from KENZAR",
        url: window.location.href,
      });
    }
  };

  const formatCurrency = (value: number, currency: string = "EGP"): string => {
    try {
      const localeForCurrency: string = isRTL ? "ar-EG" : "en-EG";
      return new Intl.NumberFormat(localeForCurrency, {
        style: "currency",
        currency: currency,
        maximumFractionDigits: 2,
      }).format(value);
    } catch {
      return `${value} ${currency}`;
    }
  };

  const category: string = product.name.includes("Jacket")
    ? "Outerwear"
    : product.name.includes("Shirt")
    ? "Tops"
    : product.name.includes("Pant")
    ? "Bottoms"
    : "Fashion";

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div
            className={`flex items-center space-x-2 text-sm font-inter ${
              isRTL ? "rtl:space-x-reverse" : "ltr:space-x-reverse"
            }`}
          >
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-quick"
            >
              {t("home") || "Home"}
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href="/collection"
              className="text-muted-foreground hover:text-primary transition-quick"
            >
              {t("collection") || "Collection"}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-primary">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className={isRTL ? "lg:order-2" : ""}>
              <div className="sticky top-24">
                {/* Main Image */}
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4 shadow-elegant">
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                {/* Image Thumbnails */}
                <div
                  className={`flex space-x-4 ${
                    isRTL ? "rtl:space-x-reverse" : "ltr:space-x-reverse"
                  }`}
                >
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square w-20 rounded-lg overflow-hidden border-2 transition-quick ${
                        selectedImage === index
                          ? "border-secondary"
                          : "border-transparent"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className={isRTL ? "lg:order-1" : ""}>
              {/* Header */}
              <div className="mb-8">
                <Link
                  href="/collection"
                  className="inline-flex items-center text-secondary hover:text-secondary/80 transition-quick mb-6 font-inter"
                >
                  <ArrowLeft
                    className={`w-4 h-4 mr-2 ${isRTL ? "rtl-flip" : ""}`}
                  />
                  Back to Collection
                </Link>

                <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-primary mb-4">
                  {product.name}
                </h1>

                <Badge variant="secondary" className="mb-4">
                  {category}
                </Badge>

                <div
                  className={`flex items-center space-x-4 mb-6 ${
                    isRTL ? "rtl:space-x-reverse" : "ltr:space-x-reverse"
                  }`}
                >
                  <div
                    className={`flex items-center space-x-1 ${
                      isRTL ? "rtl:space-x-reverse" : "ltr:space-x-reverse"
                    }`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < 4
                            ? "text-yellow-500 fill-current"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <button
                      type="button"
                      onClick={() =>
                        reviewsRef.current?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        })
                      }
                      className="text-sm text-muted-foreground ml-2 font-inter underline underline-offset-4 hover:text-primary transition-quick"
                    >
                      4.5 (12 reviews)
                    </button>
                  </div>
                  <div
                    className={`flex items-center space-x-2 ${
                      isRTL ? "rtl:space-x-reverse" : "ltr:space-x-reverse"
                    }`}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsWishlisted(!isWishlisted)}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isWishlisted ? "fill-current text-red-500" : ""
                        }`}
                      />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={handleShare}>
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="font-cinzel text-3xl font-bold text-secondary">
                    {formatCurrency(product.price, product.currency)}
                  </span>
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-cinzel text-lg font-semibold text-primary">
                    Size
                  </h3>
                  <Button variant="ghost" size="sm" className="text-secondary">
                    <Ruler className="w-4 h-4 mr-2" />
                    Size Guide
                  </Button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-6 border-2 rounded-lg font-inter font-medium transition-quick ${
                        selectedSize === size
                          ? "border-secondary bg-secondary text-secondary-foreground"
                          : "border-border hover:border-secondary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Short Description */}
              <div className="mb-8">
                <h3 className="font-cinzel text-lg font-semibold text-primary mb-4">
                  Overview
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Full Description */}
              <div className="mb-8">
                <h3 className="font-cinzel text-lg font-semibold text-primary mb-4">
                  Description
                </h3>
                <div className="text-muted-foreground font-inter leading-relaxed whitespace-pre-line">
                  {product.fullDescription}
                </div>
              </div>

              {/* Material Information */}
              <div className="mb-8">
                <h3 className="font-cinzel text-lg font-semibold text-primary mb-4">
                  Material & Care
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Main Material:</span>
                      <span className="text-muted-foreground ml-2">
                        {product.material.main}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Lining:</span>
                      <span className="text-muted-foreground ml-2">
                        {product.material.lining}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Season:</span>
                      <span className="text-muted-foreground ml-2">
                        {product.material.season}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Button */}
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-secondary transition-elegant text-lg py-6"
                  onClick={handleWhatsAppOrder}
                  disabled={!selectedSize}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {selectedSize
                    ? t("orderNow") || "Order Now"
                    : "Select Size to Order"}
                </Button>

                {!selectedSize && (
                  <p className="text-sm text-muted-foreground text-center font-inter">
                    Please select a size to continue with your order
                  </p>
                )}
              </div>

              {/* Product Info Cards */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <Card className="shadow-soft border-0">
                  <CardContent className="p-4 text-center">
                    <Truck className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground font-inter">
                      Free Shipping
                    </p>
                  </CardContent>
                </Card>
                <Card className="shadow-soft border-0">
                  <CardContent className="p-4 text-center">
                    <Shield className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground font-inter">
                      Quality Guarantee
                    </p>
                  </CardContent>
                </Card>
                <Card className="shadow-soft border-0">
                  <CardContent className="p-4 text-center">
                    <MessageCircle className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground font-inter">
                      24/7 Support
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12" ref={reviewsRef} id="reviews">
        <div className="container mx-auto px-4">
          <h2 className="font-cinzel text-3xl font-bold text-primary mb-8">
            Customer Reviews
          </h2>
          <div className="space-y-4">
            {/* Sample reviews - you can replace with actual data */}
            <Card className="shadow-soft border-0">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-inter font-semibold text-primary">
                      Ahmed Mohamed
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 5
                              ? "text-yellow-500 fill-current"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground font-inter">
                    2 days ago
                  </span>
                </div>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Excellent quality jacket! The material feels premium and the
                  fit is perfect. The dual-color design is very stylish. Highly
                  recommended!
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-0">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-inter font-semibold text-primary">
                      Sarah Ali
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4
                              ? "text-yellow-500 fill-current"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground font-inter">
                    1 week ago
                  </span>
                </div>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Great jacket for both casual and formal occasions. The
                  embroidery detail on the back is a nice touch. Worth every
                  penny!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-cinzel text-3xl font-bold text-primary text-center mb-12">
            You Might Also Like
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(products)
              .filter((p) => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="group shadow-soft hover:shadow-elegant transition-elegant border-0"
                >
                  <CardContent className="p-0">
                    <Link href={`/product/${generateSlug(relatedProduct.id)}`}>
                      <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                        <Image
                          src={relatedProduct.images[0]}
                          width={400}
                          height={533}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-elegant"
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-secondary font-medium mb-2 font-inter">
                          {category}
                        </div>
                        <h3 className="font-cinzel text-xl font-semibold text-primary mb-2">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-muted-foreground font-inter">
                          {formatCurrency(
                            relatedProduct.price,
                            relatedProduct.currency
                          )}
                        </p>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
