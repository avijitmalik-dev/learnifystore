import React from "react";
import { Star, StarHalf } from "lucide-react";

export default function Rating({ value }) {
  console.log(value);
  const stars = [];

  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} className="text-yellow-500 h-4 w-4" />);
  }
  if (hasHalfStar) {
    stars.push(<StarHalf key="half" className="text-yellow-500 h-4 w-4" />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="text-gray-300 h-4 w-4" />);
  }

  return (
    <div className="flex items-center">
      {stars}
    </div>
  );
}
