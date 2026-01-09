import Categories from "@/components/home/categories";
import Products from "@/components/home/products";
import ProductsSkeleton from "@/components/product/products-skeleton";
import SearchProduct from "@/components/product/search-product";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ q: string; category: string }>;
}) {
  const { q, category } = await searchParams;
  return (
    <section className="container mx-auto py-12 space-y-16">
      <Categories />
      <div className="space-y-5">
        <SearchProduct />
        <Suspense key={`${q}${category}`} fallback={<ProductsSkeleton />}>
          <Products q={q} category={category} />
        </Suspense>
      </div>
    </section>
  );
}
