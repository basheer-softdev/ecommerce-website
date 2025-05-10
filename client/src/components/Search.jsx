import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";

const Search = () => {
  return (
    <div className="hidden rounded-sm border border-black/10 w-full xl:flex items-center py-1.5 overflow-hidden">
      <div className="flex items-center px-4 border-r border-black/10 w-fit shrink-0 gap-10">
        <p>All Categories</p>
        <ChevronDownIcon className="size-4 mt-0.5" />
      </div>
      <input
        type="text"
        placeholder="Search for products..."
        className="px-4 focus:outline-none text-black placeholder:text-black w-full"
      />
      <button className="bg-black text-white rounded-r-sm py-2 px-8 uppercase -my-1.5 cursor-pointer">
        Search
      </button>
    </div>
  );
};

export default Search;
