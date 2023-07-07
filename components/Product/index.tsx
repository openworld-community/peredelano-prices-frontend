import { SubCategory } from "@/lib/interfaces/Category";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SubCategoryCard = ({ data }: { data: SubCategory }) => {
  return (
    <div className="h-auto max-w-full overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href="#">
        <div className="w-full h-40 relative">
          <Image
            src={
              data.thumbnail ||
              "https://api.lorem.space/image/burger?w=250&h=150"
            }
            alt={`${data.name}`}
            fill
          />
        </div>
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.name}
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default SubCategoryCard;
