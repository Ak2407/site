"use client";

import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";

const tabsName = [
  { name: "About", id: "About" },
  { name: "Projects", id: "Projects" },
  { name: "Experience", id: "Experience" },
  { name: "Blogs", id: "Blogs" },
  { name: "Contact", id: "Contact" },
];

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<
    "About" | "Projects" | "Experience" | "Blogs" | "Contact"
  >("About");

  return (
    <div className="hidden lg:flex flex-col items-start gap-1 pt-10 h-screen sticky top-0 ">
      {tabsName.map((tab) => (
        <div
          key={tab.id}
          className="relative w-full "
          onClick={() => setActiveTab(tab.id)}
        >
          <a
            href={`#${tab.id}`}
            className={`${
              activeTab === tab.id
                ? "text-black "
                : "text-gray-400 hover:text-black"
            } flex items-center duration-100 w-full text-left`}
          >
            {activeTab === tab.id && (
              <ChevronRightIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black duration-300" />
            )}
            <span className="pl-8">{tab.name}</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
