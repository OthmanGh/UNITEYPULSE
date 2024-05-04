import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';

const SearchInput = () => {
  return (
    <form className="flex items-center ga-2">
      <input type="text" placeholder="Search" className="input input-bordered rounded-full bg-secondary bg-opacity-50 placeholder:text-gray-300 text-white" />

      <button type="submit" className="btn btn-circle bg-secondary bg-opacity-55 border-none text-white">
        <IoSearchSharp />
      </button>
    </form>
  );
};

export default SearchInput;
