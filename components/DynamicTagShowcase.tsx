const rotatingTags = [
  { src: "/hero-product-cutout.png", alt: "Purple round NFC pet tag", label: "Round silicone" },
  { src: "/showcase-pet-tag-2.png", alt: "Blue dog NFC pet tag cutout", label: "Custom artwork" },
  { src: "/showcase-pet-tag-6.png", alt: "Green bone NFC pet tag cutout", label: "Bone shape" },
  { src: "/showcase-pet-tag-7.png", alt: "Pink bone NFC pet tag cutout", label: "Logo ready" }
];

export function DynamicTagShowcase() {
  return (
    <div className="dynamic-showcase" aria-label="Dynamic NFC pet tag showcase">
      <div className="orbit-ring ring-one" />
      <div className="orbit-ring ring-two" />

      <div className="floating-note note-qr">
        <strong>QR scan ready</strong>
        <span>Finder opens the pet card</span>
      </div>
      <div className="floating-note note-alert">
        <strong>Owner alerted</strong>
        <span>Contact details stay clear</span>
      </div>
      <div className="floating-note note-card">
        <strong>Digital pet card</strong>
        <span>Care notes and recovery steps</span>
      </div>

      <div className="tag-rotator">
        {rotatingTags.map((tag, index) => (
          <div className="rotating-tag" style={{ animationDelay: `${index * 2.8}s` }} key={tag.src}>
            <img src={tag.src} alt={tag.alt} />
            <span>{tag.label}</span>
          </div>
        ))}
      </div>

      <div className="showcase-pills" aria-hidden="true">
        <span>NFC tap</span>
        <span>QR backup</span>
        <span>Custom logo</span>
      </div>
    </div>
  );
}
