import React from "react";
import { FaRupeeSign } from "react-icons/fa";

export default function Free({ price, category }) {
  console.log(price, category);

  // Determine styles based on category
  const priceStyle = category.toLowerCase() === "free" ? { textDecoration: 'line-through' } : {};
  const categoryStyle = category.toLowerCase() === "paid" ? { textDecoration: 'line-through' } : {};

  return (
    <div>
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-row gap-1 items-center">
          <FaRupeeSign className="text-gray-800 h-4 w-4" />
          <p className="capitalize" style={priceStyle}>
            {price}
          </p>
        </div>
        <div>
          <p className="capitalize" style={categoryStyle}>
            {category}
          </p>
        </div>
      </div>
    </div>
  );
}
