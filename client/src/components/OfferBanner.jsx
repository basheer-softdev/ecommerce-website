import React from "react";
import { Link } from "react-router-dom";

const OfferBanner = () => {
  
  // If user exist and successfully sign up offer banner not to show...

  return (
    <div className="bg-black">
      <div className="container mx-auto text-white p-2 flex items-center w-full">
        <span className="text-sm text-center w-full">
          Sign up and get 20% off to you first order.{" "}
          <Link to="/signup" className="border-b">
            Sign Up Now
          </Link>
        </span>
      </div>
    </div>
  );
};

export default OfferBanner;
