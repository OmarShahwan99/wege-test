import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ProductModel } from "@/types/product";
import AddToCart from "../cart/add-to-cart";
import Link from "next/link";

const ProductCard = ({ product }: { product: ProductModel }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="pt-0 overflow-hidden cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <CardHeader className="justify-center bg-primary/10 ">
          <Image
            width={180}
            height={180}
            alt={product.title}
            src={product.thumbnail}
          />
        </CardHeader>
        <CardContent className="space-y-3">
          <h2 className="text-primary font-semibold text-base md:text-lg">
            {product.title.length > 20
              ? product.title.slice(0, 20) + "..."
              : product.title}
          </h2>
          <div className="flex justify-between items-center">
            <h3 className="text-xl md:text-2xl font-bold">{product.price} $</h3>
            <AddToCart product={product} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
