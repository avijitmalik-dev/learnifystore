
import React from "react";
import { IoEarthOutline } from "react-icons/io5";
import { MdOutlineCopyright } from "react-icons/md";

const list = ["Nasdaq", "Volkswagen", "Box", "NetApp", "Eventbrite"];
  
export default function Footer() {
  return (
    <div className="px-10 bg-slate-700 text-white grid grid-rows-3 gap-8 overflow-hidden w-full">
      <div className="flex flex-row justify-between items-center py-5">
        <h1 className="font-bold text-lg">
          Top companies choose{" "}
          <span className="text-blue-600">LearnifyStore Business </span> to
          build in-demand career skills.
        </h1>
        <div className="flex flex-row justify-between items-center gap-4">
          {list.map((item) => (
            <div
              key={item}
              className="border border-slate-400 px-4 py-2 rounded-md"
            >
              {" "}
              <h1 className="font-bold text-xl">{item}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="grid grid-cols-3">
          <div>
            <p>Learnify  Business</p>
            <p>Teach on Learnify </p>
            <p>Get the app</p>
            <p>About us</p>
            <p>Contact us</p>
          </div>
          <div>
            <p>Careers</p>
            <p>Blog</p>
            <p>Help and Support</p>
            <p>Affiliate</p>
            <p>Investors</p>
          </div>
          <div>
            <p>Terms</p>
            <p>Privacy policy</p>
            <p>Cookies setting</p>
            <p>Sitemap</p>
            <p>Accessibility statement</p>
          </div>
        </div>
        <div className=" w-40 h-10 flex flex-row items-center justify-start cursor-pointer pl-6 gap-2 border border-white text-white">
          <IoEarthOutline/>
          <p>English</p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">
          Learnify
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 bg-clip-text text-transparent">
            Store
          </span>
        </h1>
        <p className="flex flex-row items-center"><MdOutlineCopyright/>2024 LearnifyStore.Inc</p>
      </div>
    </div>
  );
}
