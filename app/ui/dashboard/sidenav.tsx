import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { PiBinoculars } from "react-icons/pi";
import { MdOutlineStars } from "react-icons/md";
import NavLinks from "@/app/ui/dashboard/nav-links";
export default function Sidenav() {
  return (
    <div className="hidden h-screen flex-col  md:px-2  md:block md:w-64 scroll-smooth mt-2">
      <div className="border-b-[1px] border-gray-200">
        <NavLinks linkType="general" />
      </div>
      <div className="border-b-[1px] border-gray-200">
        <div className="flex flex-col items-center justify-center gap-3 py-2">
          <p className="h-12 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2 font-medium">
            You &gt;
          </p>
        </div>
        <NavLinks linkType="personal" />
      </div>
      <div>
        <div className="flex flex-col items-center justify-center gap-3 py-2">
          <p className="h-12 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2 font-medium">
            Categories
          </p>
        </div>
        <NavLinks linkType="category" />
      </div>
    </div>
  );
}
