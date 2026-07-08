export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-nfc-pet-tags-help-lost-pets",
    category: "Pet safety",
    title: "How NFC Pet Tags Help Lost Pets Get Home Faster",
    excerpt:
      "NFC pet tags give a finder one simple action: tap the tag and open a rescue profile with the information needed to contact the owner.",
    date: "July 7, 2026",
    readTime: "4 min read",
    image: "/how-it-works-rescue-flow.png",
    sections: [
      {
        heading: "A lost-pet moment needs simple instructions",
        body: [
          "When someone finds a pet, they may only have a few minutes to help. A traditional engraved tag can show a phone number, but it cannot explain medical notes, personality details, backup contacts, or updated owner information.",
          "An NFC pet tag makes the next step clearer. The finder taps the tag with a phone and opens a pet rescue profile in the browser. That profile can show the pet photo, name, contact options, and helpful notes without asking the finder to install an app."
        ]
      },
      {
        heading: "Why NFC feels faster than typing a phone number",
        body: [
          "NFC reduces friction. Instead of reading small engraved text or typing a long URL, the finder can tap and open the profile directly. This is especially useful when a pet is nervous, moving, or found outdoors.",
          "The best experience still includes a QR code as backup. NFC is quick for supported phones, while QR scanning is familiar to almost everyone. Together, NFC and QR make the rescue action more accessible."
        ]
      },
      {
        heading: "What owners can place in the rescue profile",
        body: [
          "A useful profile should stay short, clear, and practical. Pet name, photo, owner phone, email, allergy notes, medication needs, and behavior notes are usually enough. The goal is not to make the finder read a long story; the goal is to help them contact the owner quickly.",
          "Because the profile is digital, information can be updated when a phone number changes, when a pet needs new medication, or when the family is traveling. That is the main advantage over a static engraved tag."
        ]
      }
    ]
  },
  {
    slug: "nfc-vs-qr-pet-tags",
    category: "Product guide",
    title: "NFC vs QR Pet Tags: Why Smart Pet Tags Use Both",
    excerpt:
      "NFC and QR are not competing features. For pet ID tags, they work best together because different finders use different phones and habits.",
    date: "July 7, 2026",
    readTime: "5 min read",
    image: "/hero-product-cutout.png",
    sections: [
      {
        heading: "NFC is quick, QR is universal",
        body: [
          "NFC is excellent for speed. A finder can bring the phone close to the tag and open the linked profile. It feels natural and modern, especially for people who already use tap-to-pay or transit cards.",
          "QR is excellent for visibility. A finder can see it, recognize it, and scan it with a camera. That makes QR a reliable backup when NFC is turned off, unsupported, or unfamiliar to the finder."
        ]
      },
      {
        heading: "Both routes should lead to the same profile",
        body: [
          "A smart pet tag should not split information across different systems. The NFC chip and QR code should open the same destination, so the owner only needs to update one profile.",
          "This also helps brands and pet shops. When a product line uses one consistent profile structure, customer support becomes easier and packaging instructions stay simple."
        ]
      },
      {
        heading: "What to explain to customers",
        body: [
          "For retail buyers, the clearest message is simple: tap NFC or scan QR to contact the owner. Avoid technical language on packaging. Most pet families care about peace of mind, not chip specifications.",
          "The technical details still matter in production. Tags should be tested for NFC readability, QR clarity, print durability, and comfortable daily collar wear."
        ]
      }
    ]
  },
  {
    slug: "custom-nfc-pet-tag-order-checklist",
    category: "Customization",
    title: "Custom NFC Pet Tag Order Checklist for Pet Brands",
    excerpt:
      "Before ordering custom NFC pet tags, prepare the product shape, color plan, artwork files, profile destination, packaging needs, and testing requirements.",
    date: "July 7, 2026",
    readTime: "6 min read",
    image: "/factory-about.png",
    sections: [
      {
        heading: "Start with the product use case",
        body: [
          "A custom NFC pet tag can be a retail product, a promotional giveaway, a pet shop membership item, or part of a rescue program. The use case affects the material, packaging, artwork, and quantity.",
          "For daily collar wear, soft silicone is friendly and lightweight. For a premium retail line, epoxy or metal edge styles may create a more polished look. The important thing is to match the product feel to the customer."
        ]
      },
      {
        heading: "Prepare artwork and profile requirements",
        body: [
          "Before sampling, prepare logo files, color references, icon direction, and any required printed QR placement. If the NFC tag should open a pet profile, product registration page, or brand URL, define that destination early.",
          "For larger programs, it helps to decide whether each tag has a unique profile URL or whether the tag opens a common setup page. Both approaches can work, but they need different production planning."
        ]
      },
      {
        heading: "Do not skip readability and quality checks",
        body: [
          "Smart tags need both visual and functional checks. The QR code should scan cleanly, the NFC chip should read reliably, the logo should be centered, and the assembled tag should feel comfortable on a collar.",
          "A good supplier workflow includes sample confirmation, print review, clean assembly, NFC and QR testing, and packaging inspection before shipment. This keeps the final product reliable for pet families and easier to sell for brands."
        ]
      }
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
