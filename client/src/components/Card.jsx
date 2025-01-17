import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Rating from "./Rating";
import { Button } from "./ui/button";
import Free from "./Free";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store";

export default function CourseCard({ item }) {
  const dispathch =  useDispatch()
  const cartItems = useSelector(state => state.cart);

  const addItemCarts = (id, e) =>{
    e.preventDefault();
    const itemExite = cartItems.some(item => item.id === id)
    if(itemExite){
      alert("Alerdy add this items..")
    }else{
      dispathch(addToCart(item));
    }
  }

  return (
    <Card className="h-96 w-80 shadow-lg rounded-lg overflow-hidden">
      <img
        src={item.images}
        alt={item.name}
        className="w-full h-40 object-cover"
      />
      <CardHeader className="p-4">
        <CardTitle className="capitalize text-lg font-semibold">
          {item.name}
        </CardTitle>
        <CardDescription className="text-sm text-gray-500">
          {item.title}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-700">{item.author}</p>
          <Rating value={item.rating} />
        </div>
      </CardContent>
      <CardFooter className="p-4 flex items-center justify-between">
        <div className="flex flex-row items-center gap-4 "> 
          <Free price={item.prices} category={item.category} />
        </div>
        <div >
          <Button className="capitalize h-8 w-28 bg-blue-600 hover:bg-slate-400" onClick={(e) => addItemCarts(item.id, e)}>
            add to cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
