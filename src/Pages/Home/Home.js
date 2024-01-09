import React from "react";
import MovieCard from "../../Components/Card/MovieCard";

export default function Home() {
  return (
    <>
      <div className="container mx-auto flex flex-col">
        <div className="grid grid-cols-12 gap-4">
          {/* Trending Section */}
          <div className="col-span-12 sm:col-span-4 md:me-5">
            <h1 className="py-3 font-bold">Trending</h1>
            <div className="grid grid-cols-2 gap-4">
              <div className="md:col-span-1 sm:col-span-2">
                <MovieCard />
              </div>
              <div className="md:col-span-1 sm:col-span-3">
                <MovieCard />
              </div>
            </div>
          </div>
          {/* Latest Section */}
          <div className="col-span-12 sm:col-span-8 md:ms-5">
            <h1 className="py-3 font-bold"> Latest Movies</h1>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6 sm:col-span-3">
                <MovieCard />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <MovieCard />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <MovieCard />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <MovieCard />
              </div>
            </div>
          </div>
        </div>
          </div>
          <div className="container mx-auto pt-4">
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
}
