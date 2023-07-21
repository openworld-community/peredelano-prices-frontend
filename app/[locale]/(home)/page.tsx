import SubCategoryCard from "@/components/Product";
import { SubCategory } from "@/lib/interfaces/Category";

const getSubCategories = async () => {
  const res = await fetch(
    "https://dummyjson.com/products/category/groceries?limit=10&select=id,title,thumbnail",
  );
  const data = await res.json();
  return data.products.map(
    ({
      title,
      id,
      thumbnail,
    }: {
      title: string;
      id: number;
      thumbnail?: string;
    }) => ({ name: title, id, thumbnail }) as SubCategory,
  );
};

const Home = async () => {
  const subCategories = await getSubCategories();
  return (
    <div className="p-8 grid grid-cols-2 md:grid-cols-3 gap-4">
      {subCategories.map((subData: SubCategory) => (
        <SubCategoryCard key={subData.id} data={subData} />
      ))}
    </div>
  );
};

export default Home;
