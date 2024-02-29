import React from "react";
import example from "@/public/Scottsdale_waterfront.jpg";
import Image from "next/image";
type Props = {};

export default function Card({}: Props) {
  return (
    <div className=" w-[350px] h-[400px] flex flex-col items-center justify-start  p-3 ">
      <Image
        className="w-full h-1/2 rounded-lg"
        src={example}
        width={500}
        height={500}
        alt=""
      />
      <p className="font-bold ">Best Places To Visit</p>
      <p className="text-sm ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
        dolor facere, dolore iure delectus, a atque nesciunt ipsa nihil amet
        sapiente exercitationem labore obcaecati officiis temporibus quod
        placeat? Maxime, quia.
      </p>

      <div className="flex justify-between w-full">
        <Image
          className="bg-blue-100 w-8 h-8 rounded-full "
          src={example}
          width={500}
          height={500}
          alt=""
        />
        <div className="text-sm flex items-center justify-center">
          Shawn Sidwell
        </div>
        <div>
          <div className="tracking-widest">🔵🔵🔵🔵🔵</div>
          <div className="text-xs">225k Views • 2 months ago</div>
          <div className="text-xs">Music</div>
        </div>
      </div>
    </div>
  );
}
