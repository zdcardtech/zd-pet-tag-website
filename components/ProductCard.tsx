import Link from "next/link";
import type { Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link className="product-card" href={`/products/${product.id}/`}>
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <span>{product.name}</span>
        <small>NFC + QR pet tag</small>
      </div>
    </Link>
  );
}
