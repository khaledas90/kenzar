import ImageOneProOne from "@/components/assets/pro-11.png";
import ImageOneProTwo from "@/components/assets/pro-12.png";
import ImageOneProThree from "@/components/assets/pro-13.png";
import ImageOneProFour from "@/components/assets/pro-14.png";

import ImageTwoProOne from "@/components/assets/pro-21.jpg";
import ImageTwoProTwo from "@/components/assets/pro-22.png";
import ImageTwoProThree from "@/components/assets/pro-23.png";
import ImageTwoProFour from "@/components/assets/pro-24.png";

import ImageThreeProOne from "@/components/assets/pro-31.png";
import ImageThreeProTwo from "@/components/assets/pro-32.png";
import ImageThreeProThree from "@/components/assets/pro-33.png";
import ImageThreeProFour from "@/components/assets/pro-34.png";

export const products = [
  {
    id: "KZ-STL001",
    name: "Stillness Blouson – Dual Color Jacket",
    shortDescription:
      "A stylish dual-tone jacket designed to express you without words. Your choice for confident silence.",
    fullDescription: `The "Stillness" jacket by KENZAR is more than just clothing,
it’s an expression of balance, strength, and inner calm.
It combines classic black and modern gray in a clean design with an elegant structure.
Carefully crafted to deliver comfort and distinction in every detail.

Features:
- High-quality fabrics
- Soft knitted collar
- Durable front zipper
- "Stillness" embroidery on the back
- Limited edition design`,
    material: {
      main: "70% Premium Wool / 30% Polyester",
      lining: "Soft cotton blend lining for body comfort",
      season: "Can be worn all year round",
    },
    price: 1250.0,
    currency: "EGP",
    sizes: ["S", "M", "L", "XL"],
    images: [ImageOneProOne, ImageOneProTwo, ImageOneProThree, ImageOneProFour],
  },
  {
    id: "KZ-MF-01",
    name: "Muted Force – Charcoal Grey Blouson Hoodie",
    shortDescription:
      "When silence meets strength. A hoodie designed for those who express themselves through style, not words. Subtle yet impactful everywhere.",
    fullDescription: `The "Muted Force" hoodie by KENZAR is a design that reflects calmness carrying hidden strength.
Perfect for those who move with confidence without the need for noise.
Made with premium materials, its structure offers both comfort and durability.

Features:
- 70% Pure Cotton – soft and comfortable
- 30% Polyester – excellent wrinkle resistance and long-lasting use
- Soft inner lining treated against sweat
- Geometric shoulder cut for a strong look
- Light hidden side metal zipper pocket
- Soft KENZAR print on chest
- Printed inner tape with the phrase: "Not Made to Follow. Built to Belong."`,
    material: {
      main: "70% Pure Cotton / 30% Polyester",
      lining: "Soft inner lining treated against sweat",
      season: "All-year wear",
    },
    price: 1150.0,
    currency: "EGP",
    sizes: ["S", "M", "L", "XL"],
    images: [ImageTwoProOne, ImageTwoProTwo, ImageTwoProThree, ImageTwoProFour],
  },
  {
    id: "KZ-OO-01",
    name: "Oblique Oatmeal – Premium Fleece Sweatshirt",
    shortDescription: `Be ready to stand out.
"Oblique Oatmeal" by KENZAR is a premium winter sweatshirt that combines a unique diagonal design with luxurious comfort — a piece that reflects identity and inner calm.`,
    fullDescription: `The "Oblique Oatmeal" sweatshirt is a blend of urban elegance and inner peace. 
Its slanted gradient design represents silent strength and flow, highlighted by a warm oatmeal tone with distinctive dark accents. 
Made with premium fleece cotton to deliver warmth and softness every time you wear it.

Specifications:
- Fabric: 80% Cotton / 20% Polyester
- Color: Oatmeal / Black Fade
- Neckline: Ribbed crew neck
- Fit: Regular fit
- Logo: Precision embroidery (KENZAR branding)
- Packaging: Elegant grey nylon bag printed with the brand and product name
- Proudly made in Egypt with world-class quality`,
    material: {
      main: "80% Cotton / 20% Polyester",
      lining: "Premium fleece inner fabric for warmth and comfort",
      season: "Winter / All cold seasons",
    },
    price: 600.0,
    currency: "EGP",
    sizes: ["S", "M", "L", "XL"],
    images: [
      ImageThreeProOne,
      ImageThreeProTwo,
      ImageThreeProThree,
      ImageThreeProFour,
    ],
  },
];
