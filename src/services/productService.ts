import type { Product } from "../types/product";
interface ProductResponse {
  products: Product[];
}

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch("https://dummyjson.com/products?limit=100");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductResponse = await response.json();

  return data.products;
};
