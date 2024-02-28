import Link from "next/link";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { GiRamProfile } from "react-icons/gi";
import { CiCirclePlus } from "react-icons/ci";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";

type Props = {};

export default function Topnav({}: Props) {
  return (
    <div className="flex  bg-white justify-between  px-2 py-3">
      {/* TODO: add flip down menu */}
      <div className="flex items-center justify-center p-2 gap-1">
        <CiMenuBurger size="1.25em" />
        <Link
          className="h-10 w-25 flex items-center justify-start pl-2 text-xl"
          href="/"
        >
          <GiRamProfile size="1.25em" />{" "}
          <span className="font-bold mt-2 ml-1 tracking-tighter">
            Culture Curated{" "}
          </span>
        </Link>
      </div>
      <div className="flex justify-center items-center w-1/2">
        <input
          className="border-2 border-slate-300 w-full rounded-full p-2 leading-relaxed"
          type="text"
          placeholder="Search..."
        ></input>
        <button className="rounded-full bg-slate-300 p-2 px-3 -translate-x-20">
          Search
        </button>
      </div>
      <div className="flex items-center justify-end">
        <CiCirclePlus size="2em" />
        <IoNotificationsCircleOutline size="2em" />
        <BsPersonCircle size="1.58em" />
      </div>
    </div>
  );
}
