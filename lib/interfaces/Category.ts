export interface Category {
  id: number;
  name: string;
  subcategories?: SubCategory[];
}

export interface SubCategory {
  id: number;
  name: string;
  thumbnail?: string;
}
