import React from "react";
import {
  EnvelopeIcon
} from "@heroicons/react/24/outline";

const Newsletter = () => {
  return (
    <div className="bg-[url(/newsletter.png)] h-[500px] w-full">
      <div className="container mx-auto size-full flex items-center justify-center gap-20">
        <div className="text-white w-full">
          <p className="text-5xl !font-primary max-w-2xl w-full">
            Get 20<span className="!font-tertiary">%</span> OFF on your first purchase
          </p>
          <p className="mt-6 text-lg">Sign Up for our newsletter and never miss any offers</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Your email address"
            className="bg-white rounded-xs max-w-md w-full px-4 py-2.5 focus:outline-none placeholder:text-black"
          />
          <button className="bg-black text-white max-w-md w-full mt-4 uppercase cursor-pointer px-4 py-2.5 !font-tertiary rounded-xs">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
    // <div className="container mx-auto">
    //   <div className="bg-black py-10 px-20 rounded-3xl flex items-center justify-between">
    //     <p className="uppercase !font-primary text-5xl text-white w-1/2">
    //       STAY UPTO DATE ABOUT OUR LATEST OFFERS
    //     </p>
    //     <div className="w-1/2">
    //       <div className="py-2 pl-4 max-w-xs w-full bg-white flex items-center rounded-full">
    //         <EnvelopeIcon className="size-5 text-black/50" />
    //         <input type="text" placeholder="Enter your email address" className="text-black/50 focus:outline-none placeholder:text-black/50 px-4 w-full" />
    //       </div>
    //       <button className="bg-white text-black py-2 max-w-xs w-full rounded-full mt-2">Subscribe to Newsletter</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Newsletter;
