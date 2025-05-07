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
              <p className="text-sm font-secondary">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
            <div className="flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li>
                  <Link
                    to="/help-center"
                    className="text-sm transition-colors duration-500 hover:text-purple-800"
                  >
                    Help Center
                  </Link>
                </li>
                <li>|</li>
                <li>
                  <Link
                    to="/order-tracking"
                    className="text-sm transition-colors duration-500 hover:text-purple-800"
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
            <Link to="/" className="!font-primary text-3xl">SHOP.CO</Link>
          </div>
          <div className="w-[45%]">
            <Search />
          </div>
          <div className="w-[30%] flex items-center">
            <ul className="flex items-center gap-2 pl-7">
              <li>
                <Link
                  to="/login"
                  className="hover:text-purple-800 text-sm transition-colors duration-500"
                >
                  Login
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link
                  to="/register"
                  className="hover:text-purple-800 text-sm transition-colors duration-500"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
