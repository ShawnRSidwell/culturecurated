import React from "react";
import example from "@/public/Scottsdale_waterfront.jpg";
import Image from "next/image";
type Props = {};

export default function Card({}: Props) {
  return (
    <div className=" w-[350px] h-[400px] flex flex-col items-center justify-start  p-3 ">
      <p className="font-bold ">Best Places To Visit</p>
      <Image
        className="w-full h-1/2 rounded-lg"
        src={example}
        width={500}
        height={500}
        alt=""
      />
      <div className="tracking-widest text-xs">🔵🔵🔵🔵🔵</div>
      <p className="text-xs">225k Views • 2 months ago</p>
      <p className="text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
        dolor facere, dolore iure delectus, a atque nesciunt ipsa nihil amet
        sapiente exercitationem labore obcaecati officiis temporibus quod
        placeat? Maxime, quia.
      </p>

      <div className="flex justify-between w-full bg-slate-100 rounded p-2 mt-1">
        <div className="text-sm flex items-center justify-center gap-1">
          <Image
            className="bg-blue-100 w-8 h-8 rounded-full "
            src={example}
            width={500}
            height={500}
            alt=""
          />
          <p className="ml-1 font-semibold">Shawn Sidwell</p>
        </div>
        <div className="text-sm flex items-center justify-center">
          <p className="font-semibold">Music</p>
        </div>
      </div>
    </div>
  );
}
