import { ProductModel } from "@/types/product";
import AddToCart from "../cart/add-to-cart";
import { Separator } from "../ui/separator";

export function ProductInfo({ product }: { product: ProductModel }) {
  return (
    <div className="space-y-6">
      <span className="text-[#777]">{product.category}</span>

      <h2 className="font-bold text-2xl">{product.title}</h2>
      <Separator />
      <p className="text-muted-foreground font-light leading-7">
        {product.description}
      </p>
      <Separator />

      <h3 className="font-bold text-2xl md:text-4xl text-primary">
        {product.price.toLocaleString("en-US")} $
      </h3>

      <AddToCart product={product} isDetails />
    </div>
  );
}
