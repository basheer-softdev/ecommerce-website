import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  return (
    <header>
      <div className="py-2 border-y-1 border-gray-200">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <p className="text-sm font-medium">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
            <div className="flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li>
                  <Link
                    to="/help-center"
                    className="text-xs font-medium transition-colors duration-500 hover:text-purple-600"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order-tracking"
                    className="text-xs font-medium transition-colors duration-500 hover:text-purple-600"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/4">
            <Link to="/">
              <img src="/logo.jpg" alt="" />
            </Link>
          </div>
          <div className="w-[45%]">
            <Search />
          </div>
          <div className="w-[30%]"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
