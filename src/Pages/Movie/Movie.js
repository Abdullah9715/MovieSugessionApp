import React, { useEffect, useState } from 'react';
import MovieCard from '../../Components/Card/MovieCard';
import axios from 'axios';

// const Card = ({ title, content }) => (
//   <div className="max-w-xs mx-auto mb-4 sm:w-1/2 md:w-1/3 lg:w-1/6">
//     <div className="bg-white p-4 rounded-md shadow-md">
//       <h2 className="text-lg font-semibold mb-2">{title}</h2>
//       <p>{content}</p>
//     </div>
//   </div>
// );



const CardGrid = () => {
    
    const [movies, setMovies] = useState([]);
    
      useEffect(() => {
        axios
          .get("https://api.themoviedb.org/3/trending/all/day?language=en-US")
          .then((res) => setMovies(res.data.results))
          .catch((err) => {
            console.error(err.message);
          });
      }, []);

  return (<>

    <div className="container mx-auto p-4">
    {/* Row with 6 columns on larger screens and 2 columns on smaller screens */}
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
      {/* Movie Card Component */}
      <div className="col-span-1 md:col-span-1">
        <MovieCard />
      </div>

      <div className="col-span-1 md:col-span-1">
        <MovieCard />
      </div>

      <div className="col-span-1 md:col-span-1">
        <MovieCard />
      </div>

      <div className="col-span-1 md:col-span-1">
        <MovieCard />
      </div>

      <div className="col-span-1 md:col-span-1">
        <MovieCard />
      </div>

      <div className="col-span-1 md:col-span-1">
        <MovieCard />
      </div>

      <div className="col-span-1 md:col-span-1">
        <MovieCard />
      </div>

      <div className="col-span-1 md:col-span-1">
        <MovieCard />
      </div>

      <div className="col-span-1 md:col-span-1">
        <MovieCard />
      </div>

      <div className="col-span-1 md:col-span-1">
        <MovieCard />
      </div>

      <div className="col-span-1 md:col-span-1">
        <MovieCard />
      </div>

        <div className="col-span-1 md:col-span-1">
          <MovieCard />
        </div>
    </div>
  </div>
  </>

  );
};

export default CardGrid;
