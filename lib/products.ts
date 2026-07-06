export type Product = {
  id: string;
  name: string;
  image: string;
  color: string;
  design: string;
  intro: string;
  category: "silicone";
  moq: string;
};

export const products: Product[] = [
  {
    id: "silicone-paw-purple",
    name: "Silicone Paw Purple",
    image: "/pet-tag-1.jpg",
    color: "Purple",
    design: "Paw print",
    intro: "A cheerful purple silicone pet tag with NFC and QR access for everyday pet safety.",
    category: "silicone",
    moq: "100PCS"
  },
  {
    id: "silicone-dog-blue",
    name: "Silicone Dog Blue",
    image: "/pet-tag-2.jpg",
    color: "Blue",
    design: "Dog face",
    intro: "A bright blue silicone NFC and QR pet tag with a friendly dog-face design.",
    category: "silicone",
    moq: "100PCS"
  },
  {
    id: "silicone-dog-green",
    name: "Silicone Dog Green",
    image: "/pet-tag-3.jpg",
    color: "Green",
    design: "Dog icon",
    intro: "A fresh green silicone tag for pet brands that want a playful NFC and QR product.",
    category: "silicone",
    moq: "100PCS"
  },
  {
    id: "silicone-paw-navy",
    name: "Silicone Paw Black",
    image: "/pet-tag-4.jpg",
    color: "Black",
    design: "Paw print",
    intro: "A clean black paw tag with a soft silicone body and smart NFC + QR access.",
    category: "silicone",
    moq: "100PCS"
  },
  {
    id: "silicone-paw-red",
    name: "Silicone Multi Color Set",
    image: "/pet-tag-5.jpg",
    color: "Multi Color",
    design: "Multi-tag set",
    intro: "A colorful silicone NFC and QR pet tag set suited for retail collections and sample displays.",
    category: "silicone",
    moq: "100PCS"
  },
  {
    id: "silicone-paw-yellow",
    name: "Silicone Bone Green",
    image: "/pet-tag-6.jpg",
    color: "Green",
    design: "Bone shape",
    intro: "A bright green bone-shaped silicone tag with clear NFC tap messaging.",
    category: "silicone",
    moq: "100PCS"
  },
  {
    id: "silicone-paw-orange",
    name: "Silicone Bone Pink",
    image: "/pet-tag-7.jpg",
    color: "Pink",
    design: "Bone shape",
    intro: "A cheerful pink bone-shaped tag for playful pet accessory collections.",
    category: "silicone",
    moq: "100PCS"
  },
  {
    id: "silicone-paw-pink",
    name: "Silicone Bone Blue",
    image: "/pet-tag-8.jpg",
    color: "Blue",
    design: "Bone shape",
    intro: "A cute blue silicone bone tag with NFC and QR support for pet profile access.",
    category: "silicone",
    moq: "100PCS"
  },
  {
    id: "silicone-paw-black",
    name: "Silicone Bone Lavender",
    image: "/pet-tag-9.jpg",
    color: "Lavender",
    design: "Classic paw",
    intro: "A lavender bone-shaped silicone tag for a soft custom pet accessory look.",
    category: "silicone",
    moq: "100PCS"
  },
  {
    id: "silicone-strap-blue",
    name: "Silicone Strap Blue",
    image: "/pet-tag-10.jpg",
    color: "Blue",
    design: "Strap style",
    intro: "A strap-style silicone QR and NFC accessory for collars and harnesses.",
    category: "silicone",
    moq: "100PCS"
  },
  {
    id: "silicone-strap-green",
    name: "Silicone Strap Green",
    image: "/pet-tag-11.jpg",
    color: "Green",
    design: "Strap style",
    intro: "A green strap-style pet tag accessory with QR and NFC ready setup.",
    category: "silicone",
    moq: "100PCS"
  }
];

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function getRelatedProducts(id: string, limit = 4) {
  return products.filter((product) => product.id !== id).slice(0, limit);
}
