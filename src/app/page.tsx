import Categories from "@/components/home/categories";
import Products from "@/components/home/products";
import PriceRangeSlider from "@/components/product/price-range-slider";
import ProductsSkeleton from "@/components/product/products-skeleton";
import SearchProduct from "@/components/product/search-product";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    category?: string;
    price_from?: string;
    price_to?: string;
  }>;
}) {
  const { q, category, price_from, price_to } = await searchParams;

  return (
    <section className="px-5 container mx-auto py-12 space-y-16">
      <Categories />

      <div className="space-y-5">
        <SearchProduct />

        <Suspense
          key={`${q}${category}${price_from}${price_to}`}
          fallback={<ProductsSkeleton />}
        >
          <Products q={q} category={category} />
        </Suspense>
      </div>
    </section>
  );
}
