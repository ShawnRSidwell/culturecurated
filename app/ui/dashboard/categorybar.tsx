import React from "react";

import { topics } from "@/app/lib/placeholder-data";
import clsx from "clsx";
type Props = {
  selectedTopic: string;
  setSelectedTopic: (value: string) => void;
  children: string;
};

function CategoryBar({ selectedTopic, setSelectedTopic, children }: Props) {
  return (
    // <button className="bg-black text-white px-3 rounded"> All</button>
    <button
      onClick={() => setSelectedTopic(children)}
      className={` flex-grow rounded-lg capitalize  ${children.includes(selectedTopic) ? "bg-black text-white" : "bg-gray-100 text-black hover:bg-gray-200"}`}
    >
      {children}
    </button>
  );
}

export default CategoryBar;
