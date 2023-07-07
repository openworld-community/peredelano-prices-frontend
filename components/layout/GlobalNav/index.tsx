import React from "react";
import { Category } from "@/lib/interfaces/Category";

const getCategories = async () => {
  const res = await fetch(
    "https://dummyjson.com/products/category/groceries?limit=10&select=id,brand",
  );
  const data = await res.json();
  return data.products.map(
    ({ brand, id }: { brand: string; id: number }) =>
      ({ name: brand, id }) as Category,
  );
};

const GlobalNav = async () => {
  const categories: Category[] = await getCategories();
  return (
    <nav className="lg:w-80 lg:mt-16 fixed lg:h-full top-0 left-0 border-r border-black z-10">
      <div>
        {categories.map(({ id, name }) => (
          <div className="p-4 hover:bg-gray-500 hover:cursor-pointer" key={id}>
            {name}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default GlobalNav;
