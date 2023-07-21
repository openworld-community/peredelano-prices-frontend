import { SubCategory } from "@/lib/interfaces/Category";
import Image from "next/image";
import React from "react";

import "./index.scss";

const SubCategoryCard = ({ data }: { data: SubCategory }) => {
  return (
    <div className="card">
      <figure className="image-wrapper">
        <Image
          src={
            data.thumbnail || "https://api.lorem.space/image/burger?w=250&h=150"
          }
          alt={`${data.name}`}
          fill
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>{" "}
      </div>
    </div>
  );
};

export default SubCategoryCard;
