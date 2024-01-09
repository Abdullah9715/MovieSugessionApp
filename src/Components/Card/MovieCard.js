import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const MovieCard = ({ imageUrl, movieId, rating }) => {
//   const history = useHistory();
  const [isHovered, setIsHovered] = useState(false);

//   const handleClick = () => {
    // Navigate to the Movie Page when the card is clicked
//     history.push(`/movie/${movieId}`);
//   };

  return (
    <div
      className="relative rounded-md cursor-pointer overflow-hidden transition-transform transform-gpu hover:scale-105"
      style={{ animationDuration: '0ms' }}
    //   onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=1408&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Movie Poster"
        className="w-full h-full object-cover"
      />
      {/* Star Rating Overlay */}
      <div
        className={`absolute top-0 left-0 flex items-center space-x-1 p-2 bg-black bg-opacity-75 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span
          className="text-white font-FONTSPRING-DEMO-Caros-Bold text-15px font-bold leading-9 letter-spacing-0"
          style={{ textAlign: 'left' }}
        >
          ⭐ {rating}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
