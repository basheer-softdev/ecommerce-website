import React from "react";

const NewArrivals = () => {
  return (
    <div className="pt-20 pb-10 container mx-auto">
      <p className="!font-primary text-5xl text-center pb-5">New Arrivals</p>
      <div className="flex justify-center items-center gap-20 py-10">
        <div className="w-[299px]">
          <div className="bg-[#F2F0F1] w-fit h-fit">
            <img src="/dress/tshirt-1.png" alt="" />
          </div>
          <p className="!font-tertiary pt-2.5">Seven Zero Five TShirts</p>
          <p className="!font-tertiary text-2xl py-2">$120</p>
        </div>
        <div className="w-[299px]">
          <div className="bg-[#F2F0F1] w-fit h-fit">
            <img src="/dress/tshirt-2.png" alt="" />
          </div>
          <p className="!font-tertiary pt-2.5">Seven Zero Five TShirts</p>
          <p className="!font-tertiary text-2xl py-2">$240</p>
        </div>
        <div className="w-[299px]">
          <div className="bg-[#F2F0F1] w-fit h-fit">
            <img src="/dress/tshirt-3.png" alt="" />
          </div>
          <p className="!font-tertiary pt-2.5">Seven Zero Five TShirts</p>
          <p className="!font-tertiary text-2xl py-2">$180</p>
        </div>
        <div className="w-[299px]">
          <div className="bg-[#F2F0F1] w-fit h-fit">
            <img src="/dress/tshirt-4.png" alt="" />
          </div>
          <p className="!font-tertiary pt-2.5">Seven Zero Five TShirts</p>
          <p className="!font-tertiary text-2xl py-2">$130</p>
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
