import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { incrementQuantity, decrementQuantity, removeFromCart } from "@/store";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.prices * item.quantity, 0);
  };

  const handleCheckout = () => {
    console.log("show handle checkout data");
  };

  return (
    <div className="grid grid-cols-2 h-96 w-full overflow-hidden p-10 gap-4">
      <div className="overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="pl-4">Product</th>
              <th className="">Price</th>
              <th className="ml-2">Quantity</th>
              <th className="">Remove</th>
            </tr>
          </thead>
          <tbody className="">
            {cart.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2 flex items-center">
                  <img
                    src={item.images}
                    alt={item.name}
                    className="w-10 h-10 object-cover mr-2 rounded-md"
                  />
                  <p className="text-gray-700">{item.name}</p>
                </td>
                <td className="">${item.prices}</td>
                <td className="">
                  <div className="flex items-center text-center">
                    <button
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-5 h-6 flex flex-row justify-center items-center rounded"
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    >
                      +
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold  py-2 px-5 h-6 flex flex-row justify-center items-center  rounded"
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      -
                    </button>
                  </div>
                </td>
                <td className="px-4 py-2  text-center">
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <RiDeleteBin6Line className="inline-block" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col justify-end">
        <p className="font-bold">Subtotal: ${calculateTotal().toFixed(2)}</p>
        <Button className="bg-blue-600" size="sm" onClick={handleCheckout}>
          Checkout
        </Button>
      </div>
    </div>
  );
}
