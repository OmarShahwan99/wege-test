import { fetcher } from "@/api/instance";
import {
  ProductFilters,
  ProductModel,
  ProductsResponseModel,
} from "@/types/product";

export async function getProducts(search?: string) {
  let url = "/products";
  if (search) url += `/search?q=${search}`;

  const response = await fetcher<ProductsResponseModel>(url);
  return response;
}

export async function getProduct(id: string) {
  const response = await fetcher<ProductModel>(`/products/${id}`);
  return response;
}
