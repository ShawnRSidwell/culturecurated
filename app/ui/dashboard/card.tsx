import React from "react";
import example from "@/public/Scottsdale_waterfront.jpg";
import Image from "next/image";
type Props = {};

export default function Card({}: Props) {
  return (
    <div className=" w-[325px] h-[450px] flex flex-col items-center justify-start p-3 ">
      <p className="font-bold ">Best Places To Visit</p>
      <Image
        className="w-full h-1/2 rounded-lg"
        src={example}
        width={500}
        height={500}
        alt=""
      />
      <p className="text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
        dolor facere, dolore iure delectus, a atque nesciunt ipsa nihil amet
        sapiente exercitationem labore obcaecati officiis temporibus quod
        placeat? Maxime, quia.
      </p>

      <div className="flex justify-between w-full bg-sky-100 rounded p-2 mt-1">
        <div className="text-sm flex items-center justify-center gap-1">
          <Image
            className="bg-blue-100 w-10 h-10 rounded-full "
            src={example}
            width={500}
            height={500}
            alt=""
          />
          <p className="ml-1 font-semibold">Shawn Sidwell</p>
        </div>
        <div className="text-sm flex items-center justify-center">
          <div className="flex flex-col justify-center">
            <p className="tracking-widest text-xs">🔵🔵🔵🔵🔵</p>
            <p className="text-xs font-semibold"> Travel</p>
            <p className="text-xs text-gray-500">225k Views</p>
            <p className="text-xs text-gray-500"> 2 months ago</p>
          </div>
          <div className="flex flex-col items-center justify-center"></div>
        </div>
      </div>
    </div>
  );
}
