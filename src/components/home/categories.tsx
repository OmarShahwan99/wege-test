import { getCategories } from "@/services/category.service";
import { use } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import CategoryCard from "../category/category-card";
const Categories = () => {
  const categories = use(getCategories());

  return (
    <Carousel>
      <CarouselContent className="pb-2">
        {categories.map((c, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 sm:basis-1/2  md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
          >
            <CategoryCard category={c} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Categories;
