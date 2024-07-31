import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';

function CartIcon({ count }) {
  return (
    <div className="flex flex-row items-center cursor-pointer">
      <MdOutlineShoppingCart className="h-6 w-8 text-gray-700"  />
      {count > 0 && (
        <div className="absolute top-4 right-56 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
          {count}
        </div>
      )}
    </div>
  );
}

export default CartIcon;