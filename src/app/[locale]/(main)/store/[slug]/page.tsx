"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import collectionImage from "@/components/assets/hero/collection-image.jpg";
import heroImage from "@/components/assets/hero/hero-image.jpg";
import aboutImage from "@/components/assets/about/about-image.jpg";
import {
  MessageCircle,
  Heart,
  Share2,
  ArrowLeft,
  Ruler,
  Truck,
  Shield,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const ProductDetails = () => {
  const { id } = useParams();
  const t = useTranslations("common.productDetails");
  const locale = useLocale();
  const isRTL =
    locale === "ar" || locale === "he" || locale === "fa" || locale === "ur";
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data - in a real app, this would come from an API
  const products = {
    "1": {
      id: "1",
      name: "Elegant Black Hoodie",
      arabicName: "هودي أسود أنيق",
      category: "Hoodies",
      arabicCategory: "هوديز",
      price: "Contact for Price",
      arabicPrice: "تواصل للسعر",
      description:
        "A premium black hoodie that embodies the KENZAR philosophy of psychological comfort meets sophisticated design. Crafted from high-quality cotton blend for ultimate comfort and durability.",
      arabicDescription:
        "هودي أسود فاخر يجسد فلسفة كنزار في الراحة النفسية مع التصميم المتطور. مصنوع من خليط قطني عالي الجودة للراحة القصوى والمتانة.",
      features: [
        "Premium cotton blend fabric",
        "Oversized comfortable fit",
        "Reinforced seams for durability",
        "Soft inner lining",
        "Adjustable drawstring hood",
        "Kangaroo pocket design",
      ],
      arabicFeatures: [
        "قماش خليط قطني فاخر",
        "قصة واسعة مريحة",
        "خياطة معززة للمتانة",
        "بطانة داخلية ناعمة",
        "غطاء رأس قابل للتعديل",
        "تصميم جيب الكنغر",
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      images: [collectionImage, heroImage, aboutImage],
      inStock: true,
      rating: 4.9,
      reviews: 127,
    },
    "2": {
      id: "2",
      name: "Olive Statement Tee",
      arabicName: "تيشيرت زيتي مميز",
      category: "T-Shirts",
      arabicCategory: "تيشيرتات",
      price: "Contact for Price",
      arabicPrice: "تواصل للسعر",
      description:
        "Minimalist elegance in our signature dark olive. This premium t-shirt represents the essence of KENZAR - simple yet meaningful, comfortable yet distinctive.",
      arabicDescription:
        "أناقة بسيطة بلونا الزيتي المميز. هذا التيشيرت الفاخر يمثل جوهر كنزار - بسيط لكن ذو معنى، مريح لكن مميز.",
      features: [
        "Organic cotton construction",
        "Regular fit design",
        "Breathable fabric",
        "Pre-shrunk material",
        "Ribbed crew neck",
        "Double-stitched hems",
      ],
      arabicFeatures: [
        "مصنوع من القطن العضوي",
        "تصميم قصة عادية",
        "قماش قابل للتنفس",
        "مادة مقلصة مسبقاً",
        "رقبة مضلعة",
        "حواف مخيطة مرتين",
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      images: [aboutImage, collectionImage, heroImage],
      inStock: true,
      rating: 4.8,
      reviews: 89,
    },
    "3": {
      id: "3",
      name: "Stillness Bluezone - Two-Tone Jacket",
      arabicName: "جاكيت ستيلنيس بلوزون - لونين",
      category: "Jackets",
      arabicCategory: "جاكيتات",
      price: "EGP 1,250.00",
      arabicPrice: "1,250.00 جنيه مصري",
      description:
        'The "Stillness" jacket from KENZAR is more than just a piece of clothing; it is an expression of balance, strength, and inner calm. It combines classic black with modern gray in a clean design and elegant construction. It is meticulously crafted to deliver comfort and distinction in every detail.',
      arabicDescription:
        'جاكيت "ستيلنيس" من كنزار هو أكثر من مجرد قطعة ملابس؛ إنه تعبير عن التوازن والقوة والهدوء الداخلي. يجمع بين الأسود الكلاسيكي والرمادي العصري في تصميم نظيف وبناء أنيق. مصنوع بعناية فائقة لتوفير الراحة والتميز في كل التفاصيل.',
      features: [
        "High-quality materials: 70% luxurious wool / 30% polyester",
        "Soft knit collar for ultimate comfort",
        "Durable front zipper construction",
        '"Stillness" embroidery on the back',
        "Limited edition design",
        "Soft cotton blend lining",
        "All-year-round wearability",
      ],
      arabicFeatures: [
        "مواد عالية الجودة: 70% صوف فاخر / 30% بوليستر",
        "ياقة محاكة ناعمة للراحة القصوى",
        "سحاب أمامي متين البناء",
        'تطريز "ستيلنيس" على الظهر',
        "تصميم إصدار محدود",
        "بطانة ناعمة من خليط القطن",
        "قابل للارتداء على مدار السنة",
      ],
      sizes: ["S", "M", "L", "XL"],
      images: [
        "/lovable-uploads/60e9aca1-2fd3-42ac-a4ba-7c3d23f8ad7e.png",
        "/lovable-uploads/fc765835-491a-4c73-8d9b-0a0e4076dfe0.png",
        "/lovable-uploads/9d283626-a700-425b-a80a-088060c33c6b.png",
        "/lovable-uploads/6c3b70db-0d59-4955-8138-e5484ec7e62c.png",
      ],
      inStock: true,
      rating: 4.9,
      reviews: 156,
      productCode: "KZ-STL001",
    },
  };

  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <>
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
      </>
    );
  }

  const handleWhatsAppOrder = () => {
    const productName = isRTL ? product.arabicName : product.name;
    const size = selectedSize ? ` (Size: ${selectedSize})` : "";
    const message = encodeURIComponent(
      `Hi! I'm interested in ordering the ${productName}${size} from KENZAR. Can you help me with details and pricing?`
    );
    window.open(`https://wa.me/+201024657204?text=${message}`, "_blank");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: isRTL ? product.arabicName : product.name,
        text: "Check out this amazing piece from KENZAR",
        url: window.location.href,
      });
    }
  };

  const currentName = isRTL ? product.arabicName : product.name;
  const currentCategory = isRTL ? product.arabicCategory : product.category;
  const currentDescription = isRTL
    ? product.arabicDescription
    : product.description;
  const currentFeatures = isRTL ? product.arabicFeatures : product.features;
  const currentPrice = isRTL ? product.arabicPrice : product.price;

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
              {t("home")}
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              href="/collection"
              className="text-muted-foreground hover:text-primary transition-quick"
            >
              {t("collection")}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-primary">{currentName}</span>
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
                    alt={currentName}
                    className="w-full h-full object-cover"
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
                        alt={`${currentName} ${index + 1}`}
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

                <Badge variant="secondary" className="mb-4">
                  {currentCategory}
                </Badge>

                <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-primary mb-4">
                  {currentName}
                </h1>

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
                          i < Math.floor(product.rating)
                            ? "text-yellow-500 fill-current"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2 font-inter">
                      {product.rating} ({product.reviews} reviews)
                    </span>
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

                <p className="font-cinzel text-2xl font-semibold text-secondary mb-6">
                  {currentPrice}
                </p>
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
                <div className="grid grid-cols-6 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`aspect-square border-2 rounded-lg font-inter font-medium transition-quick ${
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

              {/* Description */}
              <div className="mb-8">
                <h3 className="font-cinzel text-lg font-semibold text-primary mb-4">
                  Description
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {currentDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-cinzel text-lg font-semibold text-primary mb-4">
                  Features
                </h3>
                <ul className="space-y-2">
                  {currentFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground font-inter">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
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
                  {selectedSize ? t("orderNow") : "Select Size to Order"}
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
                    <Link href={`/product/${relatedProduct.id}`}>
                      <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                        <Image
                          src={relatedProduct.images[0]}
                          alt={
                            isRTL
                              ? relatedProduct.arabicName
                              : relatedProduct.name
                          }
                          className="w-full h-full object-cover group-hover:scale-105 transition-elegant"
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-secondary font-medium mb-2 font-inter">
                          {isRTL
                            ? relatedProduct.arabicCategory
                            : relatedProduct.category}
                        </div>
                        <h3 className="font-cinzel text-xl font-semibold text-primary mb-2">
                          {isRTL
                            ? relatedProduct.arabicName
                            : relatedProduct.name}
                        </h3>
                        <p className="text-muted-foreground font-inter">
                          {isRTL
                            ? relatedProduct.arabicPrice
                            : relatedProduct.price}
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
