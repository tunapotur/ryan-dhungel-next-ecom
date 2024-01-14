"use client";
import { useEffect } from "react";
import { useCategory } from "@/context/category";

export default function CategoryList() {
  const { fetchCategories, categories, setUpdatingCategory } = useCategory();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="my-5">
      {categories?.map((c) => (
        <button
          className="btn"
          key={c.slug}
          onClick={() => setUpdatingCategory(c)}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}
