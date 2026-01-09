import ProductSlider from "@/components/product/product-images-carousel";
import { ProductInfo } from "@/components/product/product-info";
import { getProduct } from "@/services/product.service";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) notFound();
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="pt-12 flex flex-col lg:flex-row gap-10">
          <div className="basis-full lg:basis-[40%]">
            <ProductSlider images={product.images} />
          </div>
          <div className="flex-1">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}
