import { ContactItems } from "@/lib/constants";
import React from "react";
import { LinkTag } from "./Typography";

const BlogFooter = () => {
  return (
    <div className="flex gap-6 items-center justify-center w-full flex-wrap">
      {ContactItems.map((item, index) => (
        <LinkTag key={index} href={item.url} external>
          {item.title}
        </LinkTag>
      ))}
    </div>
  );
};

export default BlogFooter;
