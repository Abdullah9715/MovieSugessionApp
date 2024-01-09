import React, { useState } from 'react';

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Add your search functionality here with the searchQuery state
    console.log('Search Query:', searchQuery);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-black" style={{
          fontFamily: 'FONTSPRING DEMO - Caros Bold',
          fontSize: '35px',
          fontWeight: 600,
          lineHeight: '30px',
        }}>
          Movie
          <br />
          Tracker <br />App
        </div>
        <div className="flex-grow flex items-center justify-center sm:hidden">
          <button className="text-white focus:outline-none" onClick={toggleSearch}>
            🔍
          </button>
          <button className="text-black m-1 focus:outline-none" onClick={toggleSearch} style={{
            fontFamily: "Rounded Mplus 1c Bold",
            fontSize: "30px",
            fontWeight: 700,
          }}>
            +
          </button>
        </div>
        <div className={`flex-grow flex items-center justify-center sm:flex ${isSearchVisible ? 'block' : 'hidden'}`}>
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="🔍 Search a movie or a series"
              value={searchQuery}
              onChange={handleSearchChange}
              className="px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 sm:w-full md:w-96 lg:w-[40rem]"
              style={{
                background: '#D9D9D9',
                borderRadius: '30px',
              }}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
