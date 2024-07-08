import React from "react";
import Image from "next/image";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { Inter } from "next/font/google";
import { FaBell, FaBookmark, FaUser } from "react-icons/fa";
import { FaHome, FaSlackHash, FaEnvelope,FaMoneyBill } from "react-icons/fa";
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";

const inter = Inter({ subsets: ["latin"] });
interface SidebarButton {
  title: string;
  icon: React.ReactNode;
}
const SidebarMenu: SidebarButton[] = [
  {
    title: "Home",
    icon: <FaHome />,
  },
  {
    title: "Explore",
    icon: <FaSlackHash />,
  },
  {
    title: "Notifications",
    icon: <FaBell />,
  },
  {
    title: "Messages",
    icon: <FaEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <FaBookmark />,
  },
  {
    title: "Money",
    icon: <FaMoneyBill />,
  },
  {
    title: "Profile",
    icon: <FaUser/>,
  },
  {
    title: "More",
    icon: <SlOptions />,
  },
];
export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className=" border  p-4 col-span-3 pt-8">
          <div className="text-3xl h-fit w-fit hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all">
            <BsBoundingBoxCircles />
          </div>

          <div className="mt-4 text-2xl font-semibold pr-4">
            <ul>
              {SidebarMenu.map((item) => (
                <li
                  key={item.title}
                  className="flex justify-start items-center gap-4 hover:bg-gray-600 rounded-full px-5 py-2 cursor-pointer w-fit mt-2"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] p-4 font-semibold rounded-full w-full">
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-slate-500 h-screen overflow-scroll">
         <FeedCard/>
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
