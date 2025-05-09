import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const OfferBanner = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto text-white p-2 flex items-center w-full">
        <span className="text-sm text-center w-full">
          Sign up and get 20% off to you first order.{" "}
          <Link to="/signup" className="border-b">
            Sign Up Now
          </Link>
        </span>
        <button className="cursor-pointer">
          <XMarkIcon className="size-4" />
        </button>
      </div>
    </div>
  );
};

export default OfferBanner;
