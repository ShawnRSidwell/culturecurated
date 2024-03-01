import React from "react";
import example from "@/public/Scottsdale_waterfront.jpg";
import Image from "next/image";
import { Curation } from "@/app/lib/definitions";
import { IoFastFoodOutline } from "react-icons/io5";

export default function Card({
  title,
  author,
  image,
  description,
  rating,
  category,
  views,
  date,
  list,
}: Curation) {
  return (
    <div className=" w-[300px] h-[450px] flex flex-col items-center justify-start border-2 rounded-lg p-3 transition-all hover:rounded-none ">
      <div className="flex flex-col items-center justify-start border-b-[1px]">
        <p className="font-semibold text-lg tracking-wider capitalize ">
          {title}
        </p>
        <p className="tracking-widest text-xs mb-1 p-1 px-2 border-[1px] rounded-3xl">
          {rating}
        </p>
        <Image
          className="w-[300px] h-[175px] rounded-lg hover:rounded-none transition-all duration-300 "
          src={image}
          width={500}
          height={500}
          alt=""
        />
        <p className="text-sm text-gray-500 p-1 py-3">{description}</p>
      </div>
      <div className="flex justify-between   px-2  mt-1 w-full mt-2">
        <div className="w-1/2 text-sm flex items-center justify-center gap-1">
          <Image
            className="w-8 h-8 rounded-full hover:rounded-none transition-all duration-300 "
            src={image}
            width={500}
            height={500}
            alt=""
          />
          <p className="ml-1 "> {author}</p>
        </div>
        <div className="text-sm flex items-center justify-center ">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold flex gap-1 mt-1">
              {" "}
              <IoFastFoodOutline />
              {category}
            </p>
            <p className="text-xs text-gray-500">{views}k Views &bull; 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
