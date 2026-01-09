import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ProductModel } from "@/types/product";
import AddToCart from "../cart/add-to-card";

const ProductCard = ({ product }: { product: ProductModel }) => {
  return (
    <Card className="pt-0 overflow-hidden cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="justify-center bg-primary/10 ">
        <Image
          width={180}
          height={180}
          alt={product.title}
          src={product.thumbnail}
        />
      </CardHeader>
      <CardContent className="space-y-2">
        <h2 className="text-primary font-semibold text-lg">{product.title}</h2>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">{product.price} $</h3>
          <AddToCart {...product} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
