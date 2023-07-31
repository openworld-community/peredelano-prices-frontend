import SubCategoryCard from "@/components/custom/Product";
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
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4">
          <li>First</li>
          <li>Second</li>
        </ul>
      </div>
      <div className="drawer-content">
        <div className="p-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {subCategories.map((subData: SubCategory) => (
            <SubCategoryCard key={subData.id} data={subData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
