import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "How ZD Pet Tag Works | NFC & QR Pet ID Tags",
  description:
    "Learn how ZD NFC and QR pet tags help finders open a rescue profile, contact the owner, and return lost pets faster."
};

const rescueSteps = [
  {
    number: "01",
    title: "Create the pet profile",
    body: "Add the pet photo, name, owner contact details, medical notes, and any rescue instructions you want a finder to see."
  },
  {
    number: "02",
    title: "Link the smart tag",
    body: "The NFC chip and printed QR code point to the same profile, so different phones still have a simple way to open it."
  },
  {
    number: "03",
    title: "Attach it to the collar",
    body: "The tag is light enough for everyday walks, parks, grooming visits, and travel."
  },
  {
    number: "04",
    title: "Finder taps or scans",
    body: "A finder opens the rescue profile in a browser and can quickly see how to contact the owner."
  }
];

const ownerControls = [
  "Update phone, email, or rescue notes online",
  "Add allergy, medication, and personality details",
  "Use one profile link for NFC tap and QR scan",
  "Prepare branded tags for retail and pet shop programs"
];

const finderDetails = [
  "Pet name and photo",
  "Primary contact methods",
  "Health or behavior notes",
  "Clear lost-pet return instructions"
];

export default function HowItWorksPage() {
  return (
    <>
      <Header active="how" />
      <main>
        <section className="how-hero">
          <div className="how-hero-copy">
            <span className="eyebrow">How it works</span>
            <h1>From tap to reunion, in four simple steps</h1>
            <p className="lead">
              ZD Pet Tag gives every tag a smart rescue profile. If a pet gets lost, the finder can tap NFC or scan the QR code to open
              the profile and reach the owner without installing an app.
            </p>
            <div className="hero-actions">
              <Link className="button peach" href="/products/">
                Browse products
              </Link>
              <Link className="button alt" href="mailto:hello@example.com">
                Request quote
              </Link>
            </div>
          </div>

          <div className="rescue-preview" aria-label="Pet rescue profile preview">
            <div className="rescue-phone">
              <div className="phone-top">
                <span />
              </div>
              <div className="pet-avatar">
                <img src="/hero-product-cutout.png" alt="ZD NFC pet tag" />
              </div>
              <h2>Lost pet profile</h2>
              <p>Tap or scan to help this pet get home.</p>
              <div className="contact-card">
                <strong>Owner contact</strong>
                <span>Call, message, or email from the profile.</span>
              </div>
              <div className="profile-row">
                <span>NFC tap</span>
                <span>QR scan</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <SectionHeader title="The rescue flow">
            A clear process for owners, finders, pet shops, and custom product programs.
          </SectionHeader>
          <div className="rescue-flow">
            {rescueSteps.map((step) => (
              <article className="flow-card" key={step.number}>
                <strong>{step.number}</strong>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="how-split">
            <div className="how-visual-card">
              <img src="/how-it-works-rescue-flow.png" alt="Illustrated NFC and QR pet rescue process" />
            </div>
            <div className="about-copy">
              <span className="eyebrow">NFC + QR backup</span>
              <h2>Two ways to open the same pet profile</h2>
              <p>
                NFC is fast for modern phones, while the QR code gives every finder a familiar backup. Both routes can point to the same
                pet profile, which keeps the rescue information consistent and easy to update.
              </p>
              <div className="method-grid">
                <article>
                  <h3>NFC tap</h3>
                  <p>Great for quick contact when a phone supports NFC reading.</p>
                </article>
                <article>
                  <h3>QR scan</h3>
                  <p>Works as a visible backup for phones, cameras, and common scanning apps.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="how-band">
          <div className="section">
            <SectionHeader title="What each person sees">
              The experience stays simple for the finder, while the owner keeps control of the details behind the tag.
            </SectionHeader>
            <div className="two-column-cards">
              <article className="info-card">
                <span className="mini-label">Finder view</span>
                <h3>Helpful information at the right moment</h3>
                <ul className="check-list">
                  {finderDetails.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="info-card mint-card">
                <span className="mini-label">Owner control</span>
                <h3>Profile details can change as life changes</h3>
                <ul className="check-list">
                  {ownerControls.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="production-panel">
            <div>
              <span className="eyebrow">For custom production</span>
              <h2>Designed for brands, shops, and pet accessory programs</h2>
              <p>
                ZD can support custom colors, artwork, logo placement, packaging, NFC/QR setup, and quality checks before shipment. MOQ
                starts from 100PCS for current silicone tag styles.
              </p>
            </div>
            <div className="production-metrics">
              <div>
                <strong>100PCS</strong>
                <span>MOQ for silicone tags</span>
              </div>
              <div>
                <strong>NFC + QR</strong>
                <span>Dual access options</span>
              </div>
              <div>
                <strong>Custom</strong>
                <span>Logo, color, artwork, package</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="cta-band">
            <div>
              <h2>Ready to build your smart pet tag collection?</h2>
              <p>Choose an existing silicone style or send your custom idea. We can help prepare a quote for your pet brand or shop.</p>
            </div>
            <Link className="button peach" href="/products/">
              View products
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
