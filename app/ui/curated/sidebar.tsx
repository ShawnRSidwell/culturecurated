import React from "react";
import MenuItem from "./menu-item";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <div className="">
      <div className="flex gap-3 overflow-clip h-10  mt-1">
        <button className="bg-black text-white p-3 rounded capitalize h-10">
          All
        </button>
        <button className="bg-gray-100 p-3 rounded capitalize h-10 ">
          Concert views{" "}
        </button>
        <button className="bg-gray-100 p-3 rounded capitalize h-10">
          {" "}
          Background Music{" "}
        </button>
        <button className="bg-gray-100 p-3 rounded capitalize h-10">
          Frogs
        </button>
        <button className="bg-gray-100 p-3 rounded capitalize h-10">
          Toads
        </button>
      </div>
      <div className="flex flex-col gap-4 mt-4 overflow-clip">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}
