"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { products } from "@/lib/products";

type ProductDetailProps = {
  product: Product;
  relatedProducts: Product[];
};

export function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
  const thumbs = [
    { src: product.image, alt: product.name },
    { src: "/pet-tag-application.png", alt: "Lost pet rescue process" },
    { src: "/factory-about.png", alt: "ZD quality production workshop" }
  ];
  const [mainImage, setMainImage] = useState(thumbs[0].src);

  return (
    <>
      <main className="page">
        <div className="breadcrumb">
          <Link href="/products/">Products</Link> / <span>{product.name}</span>
        </div>

        <section className="product-hero">
          <div className="media-panel">
            <div className="main-image">
              <img src={mainImage} alt={product.name} />
            </div>
            <div className="thumbs">
              {thumbs.map((thumb) => (
                <button className="thumb" type="button" key={thumb.src} onClick={() => setMainImage(thumb.src)}>
                  <img src={thumb.src} alt={thumb.alt} />
                </button>
              ))}
            </div>
          </div>

          <div className="info-panel">
            <span className="eyebrow">Silicone NFC + QR tag</span>
            <h1>{product.name}</h1>
            <p className="lead">{product.intro}</p>
            <div className="price">
              <strong>Quote on request</strong>
              <span className="muted">MOQ and packaging depend on customization.</span>
            </div>

            <div className="moq-card">
              <strong>MOQ: {product.moq}</strong>
              <span>Sample and bulk orders available</span>
            </div>

            <div className="feature-box">
              <span className="group-label">Key features</span>
              <div className="pill-row">
                <span className="pill">NFC tap</span>
                <span className="pill">QR scan</span>
                <span className="pill">No app needed</span>
                <span className="pill">Custom logo</span>
              </div>
            </div>

            <div className="color-box">
              <span className="group-label">Color options</span>
              <div className="option-grid">
                {products.slice(0, 9).map((item) => (
                  <Link className={`option ${item.id === product.id ? "active" : ""}`} href={`/products/${item.id}/`} key={item.id}>
                    {item.color}
                  </Link>
                ))}
              </div>
            </div>

            <ul className="bullets">
              <li>Finder can open the pet profile by NFC tap or QR scan.</li>
              <li>Owner contact details and pet rescue notes can be updated online.</li>
              <li>Soft silicone body is comfortable for daily collar wear.</li>
              <li>Suitable for brand customization, retail bundles, and pet shop programs.</li>
            </ul>

            <div className="action-row">
              <Link className="button peach" href="mailto:sales43@zdcardtech.com">
                Request quote
              </Link>
              <Link className="button alt" href="/products/">
                Back to catalog
              </Link>
            </div>
          </div>
        </section>
      </main>

      <section className="section">
        <div className="grid-3">
          <article className="card">
            <h3>Smart rescue profile</h3>
            <p>Each tag can point to a pet profile with owner contact details, medical notes, and lost-pet instructions.</p>
          </article>
          <article className="card">
            <h3>Custom production</h3>
            <p>Support custom colors, artwork, logo placement, packaging, and NFC/QR setup for brand projects.</p>
          </article>
          <article className="card">
            <h3>Quality checked</h3>
            <p>Designed around sample checks, consistent printing, clean assembly, and NFC/QR readability testing.</p>
          </article>
        </div>

        <div className="detail-layout">
          <article className="card">
            <h2>Product details</h2>
            <table className="spec-table">
              <tbody>
                <tr>
                  <th>Material</th>
                  <td>{product.color} soft silicone body with metal split ring.</td>
                </tr>
                <tr>
                  <th>Technology</th>
                  <td>NFC tap and QR scan access to a pet profile or custom URL.</td>
                </tr>
                <tr>
                  <th>Use case</th>
                  <td>Pet ID tags, lost-pet rescue, retail pet accessories, and promotional products.</td>
                </tr>
                <tr>
                  <th>Customization</th>
                  <td>Logo, artwork, color, package, QR destination, and NFC URL can be customized.</td>
                </tr>
                <tr>
                  <th>Order type</th>
                  <td>Sample, wholesale, and custom production available on request.</td>
                </tr>
              </tbody>
            </table>
          </article>

          <article className="card help-card">
            <h2>How it helps</h2>
            <p>
              When someone finds a pet, the tag gives them a simple action: tap or scan. The profile can show the information needed to
              contact the owner quickly, without asking the finder to install an app.
            </p>
          </article>
        </div>

        <div className="related-section">
          <article className="card">
            <h2>Related products</h2>
            <div className="related-grid">
              {relatedProducts.map((item) => (
                <Link className="related-card" href={`/products/${item.id}/`} key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <span className="related-info">
                    <span>{item.name}</span>
                    <small>NFC + QR pet tag</small>
                  </span>
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
