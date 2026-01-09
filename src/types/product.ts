import { CategoryModel } from "./category";
import { PaginationModel } from "./common";

export interface ProductModel {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: CategoryModel;
  images: string[];
  thumbnail: string;
}

export interface ProductFilters {
  price_min?: string;
  price_max?: string;
  category?: string;
}

export interface ProductsResponseModel extends PaginationModel {
  products: ProductModel[];
}
