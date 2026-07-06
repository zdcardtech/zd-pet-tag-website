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
    name: "Silicone Paw Navy",
    image: "/pet-tag-4.jpg",
    color: "Navy",
    design: "Paw print",
    intro: "A clean navy paw tag with a soft silicone body and smart NFC + QR access.",
    category: "silicone",
    moq: "100PCS"
  },
  {
    id: "silicone-paw-red",
    name: "Silicone Paw Red",
    image: "/pet-tag-5.jpg",
    color: "Red",
    design: "Multi-tag set",
    intro: "A red silicone NFC and QR pet tag style suited for colorful retail collections.",
    category: "silicone",
    moq: "100PCS"
  },
  {
    id: "silicone-paw-yellow",
    name: "Silicone Paw Yellow",
    image: "/pet-tag-6.jpg",
    color: "Yellow",
    design: "Bone shape",
    intro: "A sunny yellow bone-shaped silicone tag with clear NFC tap messaging.",
    category: "silicone",
    moq: "100PCS"
  },
  {
    id: "silicone-paw-orange",
    name: "Silicone Paw Orange",
    image: "/pet-tag-7.jpg",
    color: "Orange",
    design: "Bone shape",
    intro: "A warm orange bone-shaped tag for playful pet accessory collections.",
    category: "silicone",
    moq: "100PCS"
  },
  {
    id: "silicone-paw-pink",
    name: "Silicone Paw Pink",
    image: "/pet-tag-8.jpg",
    color: "Pink",
    design: "Bone shape",
    intro: "A cute pink silicone tag with NFC and QR support for pet profile access.",
    category: "silicone",
    moq: "100PCS"
  },
  {
    id: "silicone-paw-black",
    name: "Silicone Paw Black",
    image: "/pet-tag-9.jpg",
    color: "Black",
    design: "Classic paw",
    intro: "A classic black silicone pet tag for a more minimal smart ID look.",
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
