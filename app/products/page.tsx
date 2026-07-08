import Link from "next/link";
import { DynamicTagShowcase } from "@/components/DynamicTagShowcase";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <>
      <Header active="products" />
      <main>
        <section className="catalog-hero">
          <div>
            <span className="eyebrow">ZD product catalog</span>
            <h1>NFC and QR pet ID tags for brands, shops, and pet families</h1>
            <p className="lead">
              Browse the current silicone collection and upcoming epoxy and metal edge ranges. Each product can support NFC and QR
              access, custom artwork, colors, logo placement, and packaging options.
            </p>
            <div className="tabs" aria-label="Product category links">
              <Link href="#silicone">Silicone</Link>
              <Link href="#epoxy">Epoxy</Link>
              <Link href="#metal-edge">Metal Edge</Link>
            </div>
          </div>
          <DynamicTagShowcase />
        </section>

        <section className="section">
          <div className="section-head">
            <h2>Product families</h2>
            <p>Names are placed below each product image for clean browsing. More uploaded styles can be added into the same structure.</p>
          </div>

          <div className="product-category" id="silicone">
            <div className="category-title">
              <h2>Silicone Tags</h2>
              <p className="category-note">Soft, colorful, and friendly for everyday collar wear.</p>
            </div>
            <div className="gallery">
              {products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </div>

          <div className="product-category" id="epoxy">
            <div className="category-title">
              <h2>Epoxy Tags</h2>
              <p className="category-note">Glossy custom tags with a smooth dome finish. Product photos can be inserted after upload.</p>
            </div>
            <div className="placeholder-grid">
              <div className="placeholder-card">
                <div>
                  <strong>Round Epoxy Tag</strong>
                  <p>NFC + QR compatible custom dome tag.</p>
                </div>
              </div>
              <div className="placeholder-card">
                <div>
                  <strong>Shape Epoxy Tag</strong>
                  <p>Custom outline and artwork options.</p>
                </div>
              </div>
              <div className="placeholder-card">
                <div>
                  <strong>Printed Epoxy Tag</strong>
                  <p>Glossy finish for colorful brand designs.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="product-category" id="metal-edge">
            <div className="category-title">
              <h2>Metal Edge Tags</h2>
              <p className="category-note">Premium tags with a polished metal rim for a more refined look.</p>
            </div>
            <div className="placeholder-grid">
              <div className="placeholder-card">
                <div>
                  <strong>Round Metal Edge</strong>
                  <p>Premium rim with NFC and QR support.</p>
                </div>
              </div>
              <div className="placeholder-card">
                <div>
                  <strong>Color Metal Edge</strong>
                  <p>Custom color face with metal edge detail.</p>
                </div>
              </div>
              <div className="placeholder-card">
                <div>
                  <strong>Logo Metal Edge</strong>
                  <p>Designed for branded pet accessory lines.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-band">
            <div>
              <h2>Need a custom product line?</h2>
              <p>Send artwork, material preference, quantity, and packaging needs. ZD can help prepare a matching pet tag collection.</p>
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
