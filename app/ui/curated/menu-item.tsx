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
      <div className="flex flex-col justify-between px-1 py-3">
        <div>
          <p className="capitalize font-medium text-ellipsis">
            This is where we do it where I'm from
          </p>
          <p className="text-sm text-[#606060] ">Shawn Sidwell</p>
        </div>
        <div>
          <p className="tracking-widest  text-black pt-2">🖊🖊🖊🖊🖊</p>
          <p className="text-xs text-gray-500">220k Views &bull; 2024</p>
        </div>
      </div>
    </div>
  );
}
