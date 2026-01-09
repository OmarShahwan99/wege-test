"use client";
import { CategoryModel } from "@/types/category";
import { Card, CardContent } from "../ui/card";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const CategoryCard = ({ category }: { category: CategoryModel }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentCategory = searchParams.get("category");
  const isActive = currentCategory === category;

  const handleClick = () => {
    const params = new URLSearchParams(searchParams);

    if (isActive) {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Card
      onClick={handleClick}
      className={cn(
        "cursor-pointer transition duration-300 hover:border-primary",
        isActive && "border-primary"
      )}
    >
      <CardContent>
        <h2 className="whitespace-nowrap font-bold text-xl capitalize text-primary">
          {category}
        </h2>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
