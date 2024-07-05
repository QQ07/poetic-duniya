// import { useEffect, useState } from "react";

import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export function Blogs() {
  const { loading, blogs } = useBlogs();
  const TempUsers = [
    "Rohan Vaidya",
    "Shubham Adhav",
    "Sarvesh Bodakhe",
    "Rohan Vaidya",
    "Shubham Adhav",
    "Sarvesh Bodakhe",
  ];
  
  if (loading) return <>Loading..</>;
  return (
    <div className="p-10 flex justify-center">
      <div className="flex flex-col w-1/2 ">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            {...blog}
            authorName={TempUsers[index]}
            publishedDate={"1" + index * 3 + " March 2024"}
          />
        ))}
      </div>
    </div>
  );
}
