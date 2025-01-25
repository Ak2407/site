"use client";

import { useState } from "react";

const tabsName = [
  { name: "Home", id: "Home" },
  { name: "Projects", id: "Projects" },
  { name: "Experience", id: "Experience" },
  { name: "Blogs", id: "Blogs" },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<
    "Home" | "Projects" | "Experience" | "Blogs"
  >("Home");

  return (
    <div className="mt-4 flex flex-col gap-4 w-full">
      <div className="flex flex-row gap-8 w-full text-gray-400 text-sm ">
        {tabsName.map((tab) => (
          <button
            key={tab.id}
            className={`${
              activeTab === tab.id
                ? "text-black underline underline-offset-4 duration-200 "
                : "text-gray-400 hover:text-black duration-200"
            } `}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
