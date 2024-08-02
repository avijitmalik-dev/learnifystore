import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Badge } from "./ui/badge";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";

export default function Navber() {
  const [sticky, setSticky] = useState(false);
  const cart = useSelector((state) => state.cart);
  const count = cart.length;
  console.log(count);

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
        <Link to="/">
          <h1 className="text-2xl font-bold">
            Learnify
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 bg-clip-text text-transparent">
              Store
            </span>
          </h1>
        </Link>
      </div>
      <div className="flex flex-row gap-8 list-none capitalize font-bold">
        <Link to="/">home</Link>
        <Link to="/courese">course</Link>
        <Link to="/">plan & prices</Link>
        <Link to="/abouts">abouts</Link>
      </div>

      <div className="flex flex-row items-center gap-7">
        {/* <Input/> */}
        <Link to="/addItems">
          <CartIcon count={count} />
        </Link>

        <div className="flex flex-row gap-1">
          <Link to="/login">
            <Button className="h-10 w-20 rounded-none bg-white border border-black text-black hover:bg-inherit">
              Log in
            </Button>
          </Link>
          <Link to="/register">
            <Button className="h-10 w-20 rounded-none">Sing up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
