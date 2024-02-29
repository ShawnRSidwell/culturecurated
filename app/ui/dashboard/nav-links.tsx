"use client";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { MdHomeFilled } from "react-icons/md";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { PiBinoculars } from "react-icons/pi";
import { MdOutlineStars } from "react-icons/md";
import { usePathname } from "next/navigation";
import { RxAvatar } from "react-icons/rx";
import { BsBookmarkStar } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { CiPlane } from "react-icons/ci";
import { CiMusicNote1 } from "react-icons/ci";
import { BiCameraMovie } from "react-icons/bi";
import { PiTelevision } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TbBook } from "react-icons/tb";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineElectricalServices } from "react-icons/md";

import clsx from "clsx";

const generalLinks = [
  { name: "Home", href: "/", icon: MdHomeFilled },
  { name: "Trending", href: "/Trending", icon: MdOutlineLocalFireDepartment },
  { name: "Highest Rated", href: "/Rated", icon: MdOutlineStars },
  { name: "Most Viewed", href: "/Viewed", icon: PiBinoculars },
];

const personalLinks = [
  { name: "Your Profile", href: "/Profile", icon: RxAvatar },
  { name: "Following", href: "/following", icon: MdFavoriteBorder },
  { name: "Saved", href: "/Saved", icon: BsBookmarkStar },
  { name: "History", href: "/History", icon: MdHistory },
  { name: "Rated", href: "/History", icon: CiStar },
];
const categoryLinks = [
  { name: "Travel", href: "/a", icon: CiPlane },
  { name: "Music", href: "/a", icon: CiMusicNote1 },
  { name: "Movies", href: "/a", icon: BiCameraMovie },
  { name: "TV ", href: "/a", icon: PiTelevision },
  { name: "Food ", href: "/a", icon: IoFastFoodOutline },
  { name: "Shopping ", href: "/a", icon: HiOutlineShoppingBag },
  { name: "Books ", href: "/a", icon: TbBook },
  { name: "Automobiles ", href: "/a", icon: IoCarSportOutline },
  { name: "Electronics ", href: "/a", icon: MdOutlineElectricalServices },
];

export default function NavLinks({ linkType }: { linkType: string }) {
  const pathname = usePathname();
  let links;
  switch (linkType) {
    case "general":
      links = generalLinks;
      break;
    case "personal":
      links = personalLinks;
      break;
    case "category":
      links = categoryLinks;
      break;
    default:
      throw new Error("Unknown link type: " + linkType);
  }
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              `h-12 w-full flex grow items-center justify-start leading-relaxed gap-3 pl-2 subpixel-antialiased  hover:bg-slate-50 hover:rounded-lg`,
              {
                "bg-slate-50 rounded-lg font-medium": pathname === link.href,
              },
              {
                "font-[300] ": pathname != link.href,
              },
            )}
          >
            <LinkIcon size="1.25em" /> {link.name}
          </Link>
        );
      })}
    </>
  );
}
