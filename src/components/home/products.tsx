import { getProducts } from "@/services/product.service";
import { use } from "react";
import ProductCard from "../product/product-card";
import AppEmpty from "../ui/app-empty";

const Products = ({ q, category }: { q?: string; category?: string }) => {
  const products = use(getProducts(q));
  const filteredProducts = category
    ? products.products.filter((p) => p.category === category)
    : products.products;

  if (filteredProducts.length === 0)
    return <AppEmpty title="No Products Found" />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {filteredProducts.map((p) => (
        <ProductCard product={p} key={p.id} />
      ))}
    </div>
  );
};

export default Products;
