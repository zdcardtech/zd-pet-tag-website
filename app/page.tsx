import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { blogPosts } from "@/lib/blog-posts";
import { products } from "@/lib/products";

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <Header />
      <main id="top">
        <section className="hero home-banner" id="product">
          <img className="home-banner-image" src="/home-hero-banner.png" alt="Happy dog with ZD smart pet tag and pet profile app" />
          <div className="home-banner-copy">
            <span className="eyebrow">NFC + QR smart pet ID tags</span>
            <h1>A tiny tag that helps pets find their way home</h1>
            <p className="lead">
              ZD Pet Tag combines a pet profile, owner contact details, and lost-pet rescue information in one cheerful wearable tag. A
              finder can tap NFC or scan the QR code to reach you fast.
            </p>
            <div className="hero-actions">
              <Link className="button peach" href="/#buy">
                Choose a tag
              </Link>
              <Link className="button alt" href="/how-it-works/">
                See how it works
              </Link>
            </div>
            <div className="mini-proof" aria-label="Product highlights">
              <div>
                <strong>No app</strong>
                <span>Finders open the pet profile directly in a browser.</span>
              </div>
              <div>
                <strong>Two ways</strong>
                <span>NFC tap and QR scan help more phones read the tag.</span>
              </div>
              <div>
                <strong>Updatable</strong>
                <span>Change contact and pet details without replacing the tag.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <SectionHeader title="Small tag, big peace of mind">
            Light enough for daily wear, smart enough to carry more information than a traditional engraved tag.
          </SectionHeader>
          <div className="feature-grid">
            <article className="feature">
              <div className="icon-badge nfc-badge">NFC</div>
              <h3>NFC tap access</h3>
              <p>NFC-enabled phones can open the pet profile with a simple tap. No extra app required.</p>
            </article>
            <article className="feature">
              <div className="icon-badge qr-badge">QR</div>
              <h3>QR backup</h3>
              <p>If NFC is unavailable, the printed QR code opens the same rescue profile.</p>
            </article>
            <article className="feature">
              <div className="icon-badge id-badge">ID</div>
              <h3>Pet profile page</h3>
              <p>Show the pet name, photo, owner contacts, allergy notes, and personality tips.</p>
            </article>
            <article className="feature">
              <div className="icon-badge qc-badge">QC</div>
              <h3>Built for daily use</h3>
              <p>Designed for collars, walks, travel, and the everyday adventures pets love.</p>
            </article>
          </div>
        </section>

        <section className="how" id="how">
          <div className="section">
            <SectionHeader title="How lost-pet rescue works">Four simple steps turn a stressful moment into a clear way to help.</SectionHeader>
            <div className="steps">
              {[
                ["Activate the tag", "Connect the tag to a pet profile with photos, owner details, and rescue notes."],
                ["Attach to collar", "The tag is easy to wear and ready for daily walks, parks, and travel."],
                ["Finder taps or scans", "A finder uses NFC or QR to open the pet profile immediately."],
                ["Contact made faster", "The finder gets the right information, helping your pet return sooner."]
              ].map(([title, body], index) => (
                <article className="step" key={title}>
                  <div className="step-number">{index + 1}</div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="styles">
          <SectionHeader title="Collections for every pet personality">
            Product names sit under each image, and the range is organized by material family.
          </SectionHeader>

          <div className="product-category">
            <div className="category-title">
              <h3>Silicone Tags</h3>
              <p className="category-note">Soft, colorful, and friendly for everyday collar wear.</p>
            </div>
            <div className="gallery">
              {featuredProducts.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
            <div className="more-row">
              <Link className="button alt" href="/products/">
                More products
              </Link>
            </div>
          </div>

          <div className="product-category">
            <div className="category-title">
              <h3>Epoxy Tags</h3>
              <p className="category-note">Glossy custom tags with a smooth dome finish. Images can be added after upload.</p>
            </div>
            <div className="placeholder-card">
              <div>
                <strong>Epoxy collection coming next</strong>
                <p className="category-note">Upload the epoxy product photos and this area will become a matching product grid.</p>
              </div>
            </div>
          </div>

          <div className="product-category">
            <div className="category-title">
              <h3>Metal Edge Tags</h3>
              <p className="category-note">Premium tags with a polished metal rim for a more refined look.</p>
            </div>
            <div className="placeholder-card">
              <div>
                <strong>Metal edge collection coming next</strong>
                <p className="category-note">Upload the metal edge photos and they will be placed here with names below each product.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="app-layout">
            <div className="about-copy">
              <span className="eyebrow">Lost pet rescue</span>
              <h2>Clear instructions when someone finds your pet</h2>
              <p>
                The rescue page guides a finder to tap or scan the tag, view the owner contact details, and understand important notes
                such as allergies, medication, or personality traits.
              </p>
            </div>
            <div className="app-photo">
              <img src="/lost-pet-rescue-illustration.png" alt="Illustrated lost pet rescue flow with NFC pet tag and owner alert" />
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="story-layout">
            <div className="story-photo">
              <img src="/factory-about.png" alt="ZD pet tag production and quality inspection workshop" />
            </div>
            <div className="about-copy">
              <span className="eyebrow">About us</span>
              <h2>A China factory for custom NFC pet tags</h2>
              <p>
                ZD is a China-based RFID and NFC product factory supporting smart pet tag programs for brands, wholesalers, pet shops,
                and promotional buyers. With production, printing, assembly, NFC/QR setup, and inspection handled close to source, we can
                offer practical factory-direct pricing while keeping customization flexible.
              </p>
              <p>
                Our advantage is simple: stable manufacturing capacity, responsive sampling, competitive bulk costs, and quality control
                before shipment. We help buyers turn artwork, colors, packaging ideas, and rescue-profile requirements into a ready pet tag
                collection.
              </p>
              <div className="about-list">
                <span>China factory supply</span>
                <span>Factory-direct price advantage</span>
                <span>OEM/ODM logo and artwork</span>
                <span>NFC, QR, and QC before shipping</span>
              </div>
            </div>
          </div>
        </section>

        <section className="blog" id="blog">
          <div className="section">
            <SectionHeader title="Blog">Pet safety guides, NFC product education, and custom smart tag advice.</SectionHeader>
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <Link className="blog-card" href={`/blog/${post.slug}/`} key={post.slug}>
                  <small>{post.category}</small>
                  <div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="more-row">
              <Link className="button alt" href="/blog/">
                Read all articles
              </Link>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <SectionHeader title="FAQ">Short answers for buyers who want to understand the product before ordering.</SectionHeader>
          <div className="faq-grid">
            <article className="faq-item">
              <h3>Does the finder need an app?</h3>
              <p>No. The finder can open the pet profile in a mobile browser through NFC or QR.</p>
            </article>
            <article className="faq-item">
              <h3>Can you customize the design?</h3>
              <p>Yes. Logo, color, artwork, material, packaging, and tag style can be customized by project.</p>
            </article>
            <article className="faq-item">
              <h3>Do you test the NFC chip?</h3>
              <p>Yes. NFC and QR readability can be checked during production quality control.</p>
            </article>
            <article className="faq-item">
              <h3>Can pet details be updated?</h3>
              <p>Yes. The tag can point to an updatable pet profile, so contact details do not need to be reprinted.</p>
            </article>
          </div>
        </section>

        <section className="section" id="buy">
          <div className="buy-band">
            <div>
              <h2>Start a ZD pet tag order</h2>
              <p>Prices, MOQ, packaging, and purchase links can be replaced with your real sales details in the next round.</p>
              <span className="price-text">Quote on request</span>
            </div>
            <Link className="button peach" href="mailto:sales43@zdcardtech.com">
              Contact us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
