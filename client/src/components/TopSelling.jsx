import React from "react";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

const TopSelling = () => {
  return (
    <div className="pt-5 pb-10 container mx-auto">
      <p className="!font-primary text-5xl text-center py-5">top Selling</p>
      <div className="flex justify-center items-center gap-20 py-10">
        <div className="w-[299px] relative group">
          <div className="bg-[#F2F0F1] w-fit h-fit transition-colors duration-500 cursor-pointer rounded-md">
            <img
              src="/dress/tshirt-1.png"
              alt=""
              className="group-hover:scale-105 transition duration-500"
            />
          </div>
          <p className="!font-tertiary pt-2.5">Seven Zero Five TShirts</p>
          <p className="!font-tertiary text-2xl py-2">$120</p>
          <div className="absolute top-4 right-4 flex flex-col  opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <ShoppingBagIcon className="w-6 h-6 stroke-2 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110" />
            <HeartIcon className="w-6 h-6 mt-2 stroke-2 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110" />
          </div>
        </div>
        <div className="w-[299px] relative group">
          <div className="bg-[#F2F0F1] w-fit h-fit transition-colors duration-500 cursor-pointer rounded-md">
            <img
              src="/dress/tshirt-2.png"
              alt=""
              className="group-hover:scale-105 transition duration-500"
            />
          </div>
          <p className="!font-tertiary pt-2.5">Seven Zero Five TShirts</p>
          <p className="!font-tertiary text-2xl py-2">$120</p>
          <div className="absolute top-4 right-4 flex flex-col  opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <ShoppingBagIcon className="w-6 h-6 stroke-2 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110" />
            <HeartIcon className="w-6 h-6 mt-2 stroke-2 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110" />
          </div>
        </div>
        <div className="w-[299px] relative group">
          <div className="bg-[#F2F0F1] w-fit h-fit transition-colors duration-500 cursor-pointer rounded-md">
            <img
              src="/dress/tshirt-3.png"
              alt=""
              className="group-hover:scale-105 transition duration-500"
            />
          </div>
          <p className="!font-tertiary pt-2.5">Seven Zero Five TShirts</p>
          <p className="!font-tertiary text-2xl py-2">$120</p>
          <div className="absolute top-4 right-4 flex flex-col  opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <ShoppingBagIcon className="w-6 h-6 stroke-2 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110" />
            <HeartIcon className="w-6 h-6 mt-2 stroke-2 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110" />
          </div>
        </div>
        <div className="w-[299px] relative group">
          <div className="bg-[#F2F0F1] w-fit h-fit transition-colors duration-500 cursor-pointer rounded-md">
            <img
              src="/dress/tshirt-4.png"
              alt=""
              className="group-hover:scale-105 transition duration-500"
            />
          </div>
          <p className="!font-tertiary pt-2.5">Seven Zero Five TShirts</p>
          <p className="!font-tertiary text-2xl py-2">$120</p>
          <div className="absolute top-4 right-4 flex flex-col  opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <ShoppingBagIcon className="w-6 h-6 stroke-2 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110" />
            <HeartIcon className="w-6 h-6 mt-2 stroke-2 cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button className="border border-black/10 w-54 h-14 rounded-full">
          View All
        </button>
      </div>
    </div>
  );
};

export default TopSelling;
