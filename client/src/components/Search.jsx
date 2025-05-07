import React from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Search = () => {
  return (
    <div className="w-full h-[50px] bg-gray-200 rounded-sm p-2.5 flex items-center">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full h-9 focus:outline-none bg-inherit p-2 text-sm placeholder:text-gray-500 text-gray-500"
      />
      <button className="cursor-pointer pr-0.5">
        <MagnifyingGlassIcon className="size-5 text-gray-500 hover:text-gray-600 transition-colors duration-500 stroke-2" />
      </button>
    </div>
  );
};

export default Search;
