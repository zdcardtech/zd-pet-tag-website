import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About Us | ZD Pet Tag",
  description:
    "Learn about ZD, a China-based RFID and NFC pet tag factory offering factory-direct pricing, customization, and quality control."
};

const strengths = [
  {
    title: "China factory supply",
    body: "Production, printing, NFC/QR setup, assembly, and inspection are handled close to source for better control and faster communication."
  },
  {
    title: "Factory-direct price advantage",
    body: "Direct manufacturing support helps brands, wholesalers, and pet shops keep custom NFC pet tag programs practical for bulk orders."
  },
  {
    title: "Flexible OEM/ODM customization",
    body: "We support logo placement, artwork, color matching, packaging ideas, NFC URL setup, QR destination setup, and product line planning."
  }
];

const process = [
  "Confirm product style, color, logo position, NFC/QR requirements, and packaging plan.",
  "Prepare sample or artwork preview so the look and scanning flow are clear before bulk production.",
  "Produce, assemble, and run readability checks for NFC and QR access before shipment.",
  "Support repeat orders and new color or material extensions for growing pet accessory collections."
];

const capabilities = [
  "Silicone, epoxy, and metal edge pet tag programs",
  "NFC chip encoding and QR profile destination setup",
  "Custom logo, printed artwork, and retail packaging",
  "MOQ support from 100PCS for current silicone tag styles",
  "Bulk order pricing for distributors, shops, and promotional buyers",
  "Pre-shipment checks for appearance, assembly, and scan readability"
];

export default function AboutPage() {
  return (
    <>
      <Header active="about" />
      <main>
        <section className="about-hero">
          <div>
            <span className="eyebrow">About ZD Pet Tag</span>
            <h1>China factory support for custom NFC pet tags</h1>
            <p className="lead">
              ZD is a China-based RFID and NFC product factory helping pet brands, wholesalers, shops, and promotional buyers build
              smart pet tag collections with practical pricing and reliable production support.
            </p>
            <div className="hero-actions">
              <Link className="button peach" href="mailto:sales43@zdcardtech.com">
                Request factory quote
              </Link>
              <Link className="button alt" href="/products/">
                View products
              </Link>
            </div>
          </div>
          <div className="about-hero-visual">
            <img src="/factory-about.png" alt="ZD NFC pet tag production and inspection workshop" />
          </div>
        </section>

        <section className="section">
          <div className="about-stats" aria-label="Factory advantages">
            <div>
              <strong>100PCS</strong>
              <span>MOQ from current silicone styles</span>
            </div>
            <div>
              <strong>NFC + QR</strong>
              <span>Smart access options for pet rescue profiles</span>
            </div>
            <div>
              <strong>OEM/ODM</strong>
              <span>Logo, artwork, color, and packaging support</span>
            </div>
            <div>
              <strong>Factory</strong>
              <span>Direct supply with competitive bulk pricing</span>
            </div>
          </div>
        </section>

        <section className="about-band">
          <div className="section">
            <SectionHeader title="Why buyers work with us">
              We focus on practical manufacturing support: clear communication, flexible customization, factory-direct pricing, and
              product checks before shipment.
            </SectionHeader>
            <div className="advantage-grid">
              {strengths.map((item) => (
                <article className="advantage-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="factory-layout">
            <div className="about-copy">
              <span className="eyebrow">Manufacturing capability</span>
              <h2>Built for custom pet accessory programs</h2>
              <p>
                Our role is to help buyers turn product ideas into sellable NFC pet tag collections. Whether you need a soft silicone
                style, a glossy epoxy style, a premium metal edge tag, or a branded packaging set, the project can be planned around your
                target price, order quantity, artwork, and sales channel.
              </p>
              <p>
                Because we work from the factory side, we can help compare material options, simplify customization choices, and keep bulk
                pricing realistic without removing the features that matter: NFC tap, QR scan, visible branding, and reliable readability.
              </p>
            </div>
            <div className="capability-list">
              {capabilities.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="process-panel">
            <div>
              <span className="eyebrow">Order process</span>
              <h2>From sample idea to bulk shipment</h2>
              <p>
                We keep the process clear for overseas buyers, especially when custom colors, logos, packaging, and smart tag settings
                need to be confirmed before production.
              </p>
            </div>
            <div className="process-list">
              {process.map((item, index) => (
                <article key={item}>
                  <strong>{index + 1}</strong>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="dark-cta">
            <div>
              <h2>Looking for a competitive NFC pet tag supplier?</h2>
              <p>
                Send your target style, logo artwork, quantity, packaging needs, and market requirements. ZD can help prepare a practical
                factory quote.
              </p>
            </div>
            <Link className="button peach" href="mailto:sales43@zdcardtech.com">
              Contact sales
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
