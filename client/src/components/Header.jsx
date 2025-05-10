import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import OfferBanner from "./OfferBanner";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header>
      {/* Offer Banner */}
      <OfferBanner />
      {/* Navigation Bar */}
      <nav className="container mx-auto p-5 flex items-center justify-between gap-8 border-b-2 border-[#F2F0F1]">
        {/* Logo Section */}
        <div className="flex items-center gap-5">
          <button className="flex flex-col gap-1 md:hidden">
            <span className="inline-block w-6 h-[3px] rounded bg-black"></span>
            <span className="inline-block w-6 h-[3px] rounded bg-black"></span>
            <span className="inline-block w-6 h-[3px] rounded bg-black"></span>
          </button>
          <Link to="/" className="!font-primary text-3xl -mt-2">
            SHOP.CO
          </Link>
        </div>
        {/* Navigation Links */}
        <ul className="hidden md:flex gap-5 shrink-0">
          <li>Shop</li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
        {/* Search Bar */}
        <Search />
        {/* Features Sections */}
        <div className="flex items-center gap-5 shrink-0">
          <button className="block xl:hidden">
            <MagnifyingGlassIcon className="size-6 stroke-2" />
          </button>
          {/* <button>
            <HeartIcon className="size-6 stroke-2" />
          </button> */}
          <button className="relative">
            <ShoppingBagIcon className="size-5 stroke-2" />
            <span className="flex justify-center items-center absolute -top-1.5 -right-1.5 bg-black text-white rounded-full size-[18px] text-[11px]">
              0
            </span>
          </button>
          <button>
            <UserCircleIcon className="size-6 stroke-2" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
