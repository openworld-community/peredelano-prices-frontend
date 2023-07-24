import React from "react";

const CategoryPage = ({ params }: { params: { category: string } }) => {
  return <div className="hero">{params.category}</div>;
};

export default CategoryPage;
