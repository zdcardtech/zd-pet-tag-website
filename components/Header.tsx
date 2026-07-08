import Link from "next/link";

type HeaderProps = {
  active?: "products" | "how" | "blog" | "about";
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
          <Link className={active === "products" ? "active" : undefined} href="/products/">
            Products
          </Link>
          <Link className={active === "how" ? "active" : undefined} href="/how-it-works/">
            How it works
          </Link>
          <Link className={active === "blog" ? "active" : undefined} href="/blog/">
            Blog
          </Link>
          <Link className={active === "about" ? "active" : undefined} href="/about/">
            About us
          </Link>
          <Link href="/#faq">FAQ</Link>
        </div>
        <Link className="button peach" href="mailto:sales43@zdcardtech.com">
          Request quote
        </Link>
      </nav>
    </header>
  );
}
