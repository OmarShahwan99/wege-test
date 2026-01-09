import { Skeleton } from "@/components/ui/skeleton";

function ProductDetailsSkeleton() {
  return (
    <section className="py-12 px-5">
      <div className="container mx-auto">
        <div className="pt-12 flex flex-col lg:flex-row gap-10">
          <div className="basis-full lg:basis-[40%] space-y-4">
            <Skeleton className="aspect-square w-full rounded-lg" />
            <div className="flex gap-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-24 w-full rounded-lg" />
              ))}
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-10 w-40" />
            <Skeleton className="h-12 w-full max-w-sm" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsSkeleton;
