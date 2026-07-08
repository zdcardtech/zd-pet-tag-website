import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog | ZD Pet Tag",
  description: "Guides about NFC pet tags, QR pet ID tags, lost-pet rescue, and custom smart pet tag production."
};

export default function BlogPage() {
  return (
    <>
      <Header active="blog" />
      <main>
        <section className="blog-hero">
          <div>
            <span className="eyebrow">ZD pet tag blog</span>
            <h1>NFC pet tag guides for safer, smarter pet ID products</h1>
            <p className="lead">
              Practical articles for pet families, shops, and brands that want to understand NFC, QR, lost-pet rescue profiles, and custom
              pet tag production.
            </p>
          </div>
          <div className="blog-hero-visual">
            <img src="/hero-product-cutout.png" alt="Purple ZD NFC pet tag" />
          </div>
        </section>

        <section className="section">
          <div className="article-grid">
            {blogPosts.map((post) => (
              <Link className="article-card" href={`/blog/${post.slug}/`} key={post.slug}>
                <img src={post.image} alt={post.title} />
                <span className="article-card-copy">
                  <small>{post.category}</small>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <span className="article-meta">
                    {post.date} | {post.readTime}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
