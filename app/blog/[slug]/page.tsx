import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog article not found | ZD Pet Tag"
    };
  }

  return {
    title: `${post.title} | ZD Pet Tag`,
    description: post.excerpt
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug);

  return (
    <>
      <Header active="blog" />
      <main>
        <article className="article-page">
          <div className="breadcrumb">
            <Link href="/blog/">Blog</Link> / <span>{post.category}</span>
          </div>
          <header className="article-header">
            <span className="eyebrow">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="lead">{post.excerpt}</p>
            <span className="article-meta">
              {post.date} | {post.readTime}
            </span>
          </header>

          <div className="article-cover">
            <img src={post.image} alt={post.title} />
          </div>

          <div className="article-body">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </article>

        <section className="section">
          <div className="section-head">
            <h2>More NFC pet tag articles</h2>
            <p>Continue reading practical guides about smart pet ID tags and custom pet product programs.</p>
          </div>
          <div className="blog-grid">
            {relatedPosts.map((item) => (
              <Link className="blog-card" href={`/blog/${item.slug}/`} key={item.slug}>
                <small>{item.category}</small>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
