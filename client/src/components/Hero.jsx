import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#F2F0F1]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2">
          <p className="!font-primary text-7xl">
            Find Clothes that Matches your style
          </p>
          <p className="py-8 text-xl">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white w-54 h-14 rounded-full text-lg">
            Shop Now
          </button>
          <div className="flex mt-12">
            <div className="pr-8">
              <p className="!font-tertiary text-4xl">200+</p>
              <p className="text-black/60">International Brands</p>
            </div>
            <div className="px-8 border-x border-black/10">
              <p className="!font-tertiary text-4xl">2000+</p>
              <p className="text-black/60">High-Quality Products</p>
            </div>
            <div className="pl-8">
              <p className="!font-tertiary text-4xl">30,000+</p>
              <p className="text-black/60">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <img src="/hero-image.png" alt="her-image" className="size-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
