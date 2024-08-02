import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Link } from "react-router-dom";

export default function Singin() {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 p-10 h-96">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            tempora quia quae maiores ipsam atque voluptatibus, doloribus
            voluptates! Sed voluptate ipsa ad alias qui ipsum quam porro quod
            explicabo molestias.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="capitalize flex flex-row items-center justify-center text-2xl font-bold">new user login</h1>
          <div className="w-full">
            <form action="" className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="capitalize font-bold" >Email</label>
                <Input />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="capitalize font-bold" >Password</label>
                <Input />
              </div>
            </form>
          </div>
          <div>
            <Button className="bg-blue-700 px-10 w-full">Submit</Button>
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <p className="capitalize">new user?</p>
            <Link to="/register" className="text-blue-700 underline">create accounts</Link>
        </div>
        </div>
       
      </div>
    </>
  );
}
