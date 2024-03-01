import React from "react";
import testImage from "@/public/test-images/Scottsdale_waterfront.jpg";
import Image from "next/image";
import { IoFastFoodOutline } from "react-icons/io5";

type Props = {};

export default function MenuItem({}: Props) {
  return (
    <div className="w-full h-[140px] grid grid-cols-2  gap-3">
      <div className=" flex items-center justify-center">
        <Image className="rounded-lg h-[125px]" src={testImage} alt="" />
      </div>
      <div className="flex flex-col justify-around px-1 py-3">
        <div>
          <p className="capitalize font-medium text-ellipsis">
            This is where we do it where I'm from
          </p>
          <p className="text-sm text-[#606060] tracking-tight ">
            Shawn Sidwell
          </p>
        </div>
        <div className="flex items-center">
          <p className="tracking-widest  text-black ">🖊🖊🖊🖊🖊</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 tracking-tight">
            Music &bull; 220k Views &bull; 3 months ago
          </p>
        </div>
      </div>
    </div>
  );
}
