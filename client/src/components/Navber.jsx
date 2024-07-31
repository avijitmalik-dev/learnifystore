import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { MdOutlineShoppingCart } from "react-icons/md";
import { Badge } from "./ui/badge";
import CartIcon from "./CartIcon";

export default function Navber() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex flex-row justify-between py-6 px-10 items-center ${
        sticky ? "bg-white border border-b-1 fixed top-0 left-0 right-0" : ""
      }`}
    >
      <div>
        <h1 className="text-2xl font-bold">
          Learnify
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 bg-clip-text text-transparent">
            Store
          </span>
        </h1>
      </div>
      <div className="flex flex-row gap-8 list-none capitalize font-bold">
        <li>home</li>
        <li>course</li>
        <li>plan & prices</li>
        <li>abouts</li>
      </div>
      <div className="flex flex-row items-center gap-7">
        {/* <Input/> */}
        <CartIcon count={2} />
        <div className="flex flex-row gap-1">
          <Button className="h-10 w-20 rounded-none bg-white border border-black text-black hover:bg-inherit">Log in</Button>
          <Button className="h-10 w-20 rounded-none">Sing up</Button>
        </div>
      </div>
    </div>
  );
}
