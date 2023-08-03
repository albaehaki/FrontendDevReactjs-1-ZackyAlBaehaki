import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const Rating = ({ rating }: any) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center py-2">
      
      {[...Array(fullStars)].map((_, index) => (
        <StarIcon key={index} className="w-6 h-6 text-[#002b56]" />
      ))}

      
      {hasHalfStar && (
        <div className="relative">
          <StarIcon className="w-6 h-6 text-white" />
          <StarIcon className="w-6 h-6 text-[#002b56] absolute top-0 left-0" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)' }} />
        </div>
      )}

      
      {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
        <StarIcon key={index} className="w-6 h-6 text-gray-300" />
      ))}
    </div>
  );
};

export default Rating;
