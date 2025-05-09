import React from "react";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

const NewArrivals = () => {
  return (
    <div className="pt-20 pb-10 container mx-auto">
      <p className="!font-primary text-5xl text-center pb-5">New Arrivals</p>
      <div className="flex justify-center items-center gap-20 py-10">
        <div className="w-[299px] relative">
          <div className="bg-[#F2F0F1] w-fit h-fit hover:bg-black/15 transition-colors duration-500 cursor-pointer rounded-md">
            <img
              src="/dress/tshirt-1.png"
              alt=""
              className="hover:scale-105 transition duration-500"
            />
          </div>
          <p className="!font-tertiary pt-2.5">Seven Zero Five TShirts</p>
          <p className="!font-tertiary text-2xl py-2">$120</p>
          <div className="absolute top-4 right-4">
            <ShoppingBagIcon
              className="size-[22px] stroke-2 hover:scale-105 hover:stroke-2 cursor-pointer transition duration-500 will-change-transform
    backface-visibility-hidden"
            />
            <HeartIcon
              className="size-[22px] mt-2 stroke-2 hover:scale-105 hover:stroke-2 cursor-pointer transition duration-500 will-change-transform
    backface-visibility-hidden"
            />
          </div>
        </div>
        <div className="w-[299px] relative">
          <div className="bg-[#F2F0F1] w-fit h-fit hover:bg-black/15 transition-colors duration-500 cursor-pointer rounded-md">
            <img
              src="/dress/tshirt-2.png"
              alt=""
              className="hover:scale-105 transition duration-500"
            />
          </div>
          <p className="!font-tertiary pt-2.5">Seven Zero Five TShirts</p>
          <p className="!font-tertiary text-2xl py-2">$240</p>
          <div className="absolute top-4 right-4">
            <ShoppingBagIcon
              className="size-[22px] stroke-2 hover:scale-105 hover:stroke-2 cursor-pointer transition duration-500 will-change-transform
    backface-visibility-hidden"
            />
            <HeartIcon
              className="size-[22px] mt-2 stroke-2 hover:scale-105 hover:stroke-2 cursor-pointer transition duration-500 will-change-transform
    backface-visibility-hidden"
            />
          </div>
        </div>
        <div className="w-[299px] relative">
          <div className="bg-[#F2F0F1] w-fit h-fit hover:bg-black/15 transition-colors duration-500 cursor-pointer rounded-md">
            <img
              src="/dress/tshirt-3.png"
              alt=""
              className="hover:scale-105 transition duration-500"
            />
          </div>
          <p className="!font-tertiary pt-2.5">Seven Zero Five TShirts</p>
          <p className="!font-tertiary text-2xl py-2">$180</p>
          <div className="absolute top-4 right-4">
            <ShoppingBagIcon
              className="size-[22px] stroke-2 hover:scale-105 hover:stroke-2 cursor-pointer transition duration-500 will-change-transform
    backface-visibility-hidden"
            />
            <HeartIcon
              className="size-[22px] mt-2 stroke-2 hover:scale-105 hover:stroke-2 cursor-pointer transition duration-500 will-change-transform
    backface-visibility-hidden"
            />
          </div>
        </div>
        <div className="w-[299px] relative">
          <div className="bg-[#F2F0F1] w-fit h-fit hover:bg-black/15 transition-colors duration-500 cursor-pointer rounded-md">
            <img
              src="/dress/tshirt-4.png"
              alt=""
              className="hover:scale-105 transition duration-500"
            />
          </div>
          <p className="!font-tertiary pt-2.5">Seven Zero Five TShirts</p>
          <p className="!font-tertiary text-2xl py-2">$130</p>
          <div className="absolute top-4 right-4">
            <ShoppingBagIcon
              className="size-[22px] stroke-2 hover:scale-105 hover:stroke-2 cursor-pointer transition duration-500 will-change-transform
    backface-visibility-hidden"
            />
            <HeartIcon
              className="size-[22px] mt-2 stroke-2 hover:scale-105 hover:stroke-2 cursor-pointer transition duration-500 will-change-transform
    backface-visibility-hidden"
            />
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

export default NewArrivals;
