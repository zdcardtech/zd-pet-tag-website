import Link from "next/link";

type HeaderProps = {
  active?: "products";
};

export function Header({ active }: HeaderProps) {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <Link className="brand" href="/#top" aria-label="ZD Pet Tag home">
          <img src="/zd-logo.png" alt="ZD Logo" />
          <span>ZD Pet Tag</span>
        </Link>
        <div className="nav-links">
          <Link className={active === "products" ? "active" : undefined} href="/products">
            Products
          </Link>
          <Link href="/#how">How it works</Link>
          <Link href="/#styles">Collections</Link>
          <Link href="/#blog">Blog</Link>
          <Link href="/#about">About us</Link>
          <Link href="/#faq">FAQ</Link>
        </div>
        <Link className="button peach" href="mailto:hello@example.com">
          Request quote
        </Link>
      </nav>
    </header>
  );
}
