import React from "react";
import example from "@/public/test-images/Scottsdale_waterfront.jpg";
import Image from "next/image";
type Props = {};

export default function FakeCard({}: Props) {
  return (
    <div className=" w-[300px] h-[500px] flex flex-col items-center justify-start p-3 ">
      <p className="font-semibold text-lg tracking-widest capitalize ">
        Best Places To Visit
      </p>
      <Image
        className="w-full h-1/2 rounded-xl hover:rounded-none transition-all duration-300 "
        src={example}
        width={500}
        height={500}
        alt=""
      />
      <p className="text-sm text-gray-500 p-1 py-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
        dolor facere, dolore iure delectus, a atque nesciunt ipsa nihil amet
        sapiente exercitationem labore obcaecati officiis temporibus quod
        placeat? Maxime, quia.
      </p>

      <div className="flex justify-between bg-sky-100 shadow border-0 rounded px-2 py-1 mt-1 w-full hover:rounded-none transition-all  hover:scale-[102%]">
        <div className="text-sm flex items-center justify-center gap-1">
          <Image
            className=" w-10 h-10 rounded-full "
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
