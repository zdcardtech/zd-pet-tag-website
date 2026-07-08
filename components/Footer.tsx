import Link from "next/link";

type SocialIcon = "instagram" | "facebook" | "linkedin" | "youtube" | "website";

function SocialIconMark({ icon }: { icon: SocialIcon }) {
  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="6" y="6" width="12" height="12" rx="3.2" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="16" cy="8" r="0.8" />
      </svg>
    );
  }

  if (icon === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path className="filled" d="M14.2 8.2h2.1V5.4c-.5-.1-1.5-.2-2.7-.2-2.7 0-4.4 1.6-4.4 4.5v2H6.8v3.1h2.4v6h3.4v-6h2.8l.5-3.1h-3.3v-1.8c0-1 .4-1.7 1.6-1.7Z" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path className="filled" d="M7.8 9.6h3v8.7h-3V9.6Zm1.5-4.1a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4Zm3.4 4.1h2.9v1.2c.5-.8 1.4-1.5 2.8-1.5 2.2 0 3.6 1.5 3.6 4.3v4.7h-3v-4.4c0-1.2-.5-1.9-1.5-1.9-.9 0-1.5.6-1.7 1.4-.1.3-.1.6-.1.9v4h-3V9.6Z" />
      </svg>
    );
  }

  if (icon === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path className="filled" d="M20.5 8.2c-.2-.9-.9-1.6-1.8-1.8C17.2 6 12 6 12 6s-5.2 0-6.7.4c-.9.2-1.6.9-1.8 1.8-.4 1.5-.4 3.8-.4 3.8s0 2.3.4 3.8c.2.9.9 1.6 1.8 1.8 1.5.4 6.7.4 6.7.4s5.2 0 6.7-.4c.9-.2 1.6-.9 1.8-1.8.4-1.5.4-3.8.4-3.8s0-2.3-.4-3.8ZM10.3 14.7V9.3l4.7 2.7-4.7 2.7Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M4.6 9.2h14.8M4.6 14.8h14.8M12 4.2c2 2.2 3 4.8 3 7.8s-1 5.6-3 7.8c-2-2.2-3-4.8-3-7.8s1-5.6 3-7.8Z" />
    </svg>
  );
}

export function Footer() {
  const socialLinks = [
    { label: "Instagram", icon: "instagram" as const, href: "https://www.instagram.com/zdtechnology/?hl=en" },
    { label: "Facebook", icon: "facebook" as const, href: "https://www.facebook.com/zdtechnology?locale=en_GB" },
    { label: "LinkedIn", icon: "linkedin" as const, href: "https://www.linkedin.com/company/13194411/" },
    { label: "YouTube", icon: "youtube" as const, href: "https://www.youtube.com/channel/UCw_tQ0y1X1i7ed8eJieH8CQ" },
    { label: "Official website", icon: "website" as const, href: "https://www.zdrfid.com/" }
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand-block">
          <Link className="brand" href="/#top">
            <img src="/zd-logo.png" alt="ZD Logo" />
            <span>ZD Pet Tag</span>
          </Link>
          <span>NFC & QR smart pet tags | After-sales: sales43@zdcardtech.com</span>
        </div>
        <div className="footer-social" aria-label="ZD Technology social media links">
          <div>
            <strong>Follow ZD Technology</strong>
            <span>Pet tag updates, RFID products, and NFC ideas.</span>
          </div>
          <div className="social-links">
            {socialLinks.map((link) => (
              <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} key={link.label}>
                <SocialIconMark icon={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
