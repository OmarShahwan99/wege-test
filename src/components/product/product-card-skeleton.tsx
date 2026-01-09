import { Card, CardContent, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <Card className="pt-0 overflow-hidden">
      <CardHeader className="flex items-center justify-center bg-primary/10">
        <Skeleton className="h-45 w-45 rounded-md" />
      </CardHeader>

      <CardContent className="space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <div className="flex justify-between items-center">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-10 w-10 rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCardSkeleton;
