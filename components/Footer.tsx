import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link className="brand" href="/#top">
          <img src="/zd-logo.png" alt="ZD Logo" />
          <span>ZD Pet Tag</span>
        </Link>
        <span>NFC & QR smart pet tags | After-sales: hello@example.com</span>
      </div>
    </footer>
  );
}
