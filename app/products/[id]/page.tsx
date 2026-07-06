import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductDetail } from "@/components/ProductDetail";
import { getProduct, getRelatedProducts, products } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    return {
      title: "Product not found | ZD Pet Tag"
    };
  }

  return {
    title: `${product.name} | ZD Pet Tag`,
    description: product.intro
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header active="products" />
      <ProductDetail product={product} relatedProducts={getRelatedProducts(product.id)} />
      <Footer />
    </>
  );
}
