import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#F2F0F1]">
      <div className="container mx-auto flex xs:!px-5 flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full lg:w-1/2 py-4 px-5 xs:!px-0">
          <p className="!font-primary text-4xl sm:text-5xl 2xl:text-7xl">
            Find Clothes that Matches your style
          </p>
          <p className="py-5 text-black/60 sm:text-lg xl:py-8 md:text-xl">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white w-full h-10 sm:h-12 lg:w-48 xl:w-54 xl:h-14 rounded-full sm:text-lg md:text-xl">
            Shop Now
          </button>
          <div className="flex mt-5 xl:mt-12 w-full ">
            <div className=" w-full flex-1">
              <p className="!font-tertiary text-2xl md:text-4xl">200+</p>
              <p className="text-black/60">International Brands</p>
            </div>
            <div className="pl-4 sm:pl-8 border-l sm:border-x border-black/10 w-full flex-1">
              <p className="!font-tertiary text-2xl md:text-4xl">2000+</p>
              <p className="text-black/60">High-Quality Products</p>
            </div>
            <div className="hidden pl-8 sm:block sm:flex-1">
              <p className="!font-tertiary text-xl md:text-4xl">30,000+</p>
              <p className="text-black/60">Happy Customers</p>
            </div>
          </div>
          <div className="w-full flex justify-center sm:hidden">
            <div className="mt-6">
              <p className="!font-tertiary text-2xl xl:text-4xl">30,000+</p>
              <p className="text-black/60">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-end">
          <img src="/hero-image.png" alt="her-image" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
