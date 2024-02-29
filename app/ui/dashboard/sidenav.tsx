import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { PiBinoculars } from "react-icons/pi";
import { MdOutlineStars } from "react-icons/md";

export default function Sidenav() {
  return (
    <div className="hidden h-screen flex-col  md:px-2 md:hover:overflow-auto md:block md:w-64 scroll-smooth">
      <div className="border-b-2 border-slate-400">
        <div className="flex flex-col items-center justify-center gap-2 py-2">
          <p className="h-10 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2">
            <MdHomeFilled size="1.25em" /> Home
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 py-2">
          <p className="h-10 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2">
            <MdOutlineLocalFireDepartment size="1.25em" /> Trending
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 py-2">
          <p className="h-10 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2">
            <MdOutlineStars size="1.25em" /> Highest Rated
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 py-2">
          <p className="h-10 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2">
            <PiBinoculars size="1.25em" /> Most Viewed
          </p>
        </div>
      </div>
      <div className="border-b-2 border-slate-400">
        <div className="flex flex-col items-center justify-center gap-3 py-2">
          <p className="h-10 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2 font-medium">
            You &gt;
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 py-2">
          <p className="h-10 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2">
            <CiCirclePlus size="1.25em" /> Following
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 py-2">
          <p className="h-10 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2">
            <CiCirclePlus size="1.25em" /> Saved
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 py-2">
          <p className="h-10 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2">
            <CiCirclePlus size="1.25em" /> History
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center gap-3 py-2">
          <p className="h-10 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2 font-medium">
            Categories
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 py-2">
          <p className="h-10 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2">
            <CiCirclePlus size="1.25em" /> Travel
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 py-2">
          <p className="h-10 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2">
            <CiCirclePlus size="1.25em" /> Music
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 py-2">
          <p className="h-10 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2">
            <CiCirclePlus size="1.25em" /> Movies
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 py-2">
          <p className="h-10 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2">
            <CiCirclePlus size="1.25em" /> Games
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 py-2">
          <p className="h-10 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2">
            <CiCirclePlus size="1.25em" /> TV
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 py-2">
          <p className="h-10 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2">
            <CiCirclePlus size="1.25em" /> Food
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 py-2">
          <p className="h-10 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2">
            <CiCirclePlus size="1.25em" /> Shopping
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 py-2">
          <p className="h-10 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2">
            <CiCirclePlus size="1.25em" /> Books
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 py-2">
          <p className="h-10 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2">
            <CiCirclePlus size="1.25em" /> Automobiles
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 py-2">
          <p className="h-10 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2">
            <CiCirclePlus size="1.25em" /> Electronics
          </p>
        </div>
      </div>
    </div>
  );
}
