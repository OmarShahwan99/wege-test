import { fetcher } from "@/api/instance";
import { CategoryModel } from "@/types/category";

export async function getCategories() {
  const response = await fetcher<CategoryModel[]>("/products/category-list");
  return response;
}
