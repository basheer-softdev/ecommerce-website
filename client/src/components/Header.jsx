import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import OfferBanner from "./OfferBanner";
import {
  ChevronDownIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    // <header>
    //   <div className="py-2 border-y-1 border-gray-200">
    //     <div className="container mx-auto">
    //       <div className="flex items-center justify-between">
    //         <div className="w-1/2">
    //           <p className="text-sm font-secondary">
    //             Get up to 50% off new season styles, limited time only
    //           </p>
    //         </div>
    //         <div className="flex items-center justify-end">
    //           <ul className="flex items-center gap-3">
    //             <li>
    //               <Link
    //                 to="/help-center"
    //                 className="text-sm transition-colors duration-500 hover:text-purple-800"
    //               >
    //                 Help Center
    //               </Link>
    //             </li>
    //             <li>|</li>
    //             <li>
    //               <Link
    //                 to="/order-tracking"
    //                 className="text-sm transition-colors duration-500 hover:text-purple-800"
    //               >
    //                 Order Tracking
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="py-3">
    //     <div className="container mx-auto flex items-center justify-between">
    //       <div className="w-1/4">
    //         <Link to="/" className="!font-primary text-3xl">SHOP.CO</Link>
    //       </div>
    //       <div className="w-[45%]">
    //         <Search />
    //       </div>
    //       <div className="w-[30%] flex items-center">
    //         <ul className="flex items-center gap-2 pl-7">
    //           <li>
    //             <Link
    //               to="/login"
    //               className="hover:text-purple-800 text-sm transition-colors duration-500"
    //             >
    //               Login
    //             </Link>
    //           </li>
    //           <li className="text-gray-500">/</li>
    //           <li>
    //             <Link
    //               to="/register"
    //               className="hover:text-purple-800 text-sm transition-colors duration-500"
    //             >
    //               Register
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <header>
      {/* Offer banner */}
      <OfferBanner />
      {/* NavBar */}
      <nav className="container mx-auto py-5 flex items-center justify-between gap-10">
        {/* Logo Section */}
        <Link to="/" className="!font-primary text-3xl -mt-2">
          SHOP.CO
        </Link>
        {/* Navigation links */}
        <ul className="flex gap-5 shrink-0">
          <li>Shop</li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
        {/* Search bar */}
        {/* <div className="rounded-full bg-[#f0f0f0] px-4 py-2.5 w-full flex items-center">
          <button className="">
            <MagnifyingGlassIcon className="size-5 text-black/40 stroke-2" />
          </button>
          <input
            type="text"
            placeholder="Search for products..."
            className="pl-2 focus:outline-none text-black/40"
          />
        </div> */}
        <div className="rounded-sm border border-black/10 w-full flex items-center py-1.5 overflow-hidden">
          <div className="flex items-center px-4 border-r border-black/10 w-fit shrink-0 gap-10">
            <p>All Categories</p>
            <ChevronDownIcon className="size-4 mt-0.5" />
          </div>
          <input
            type="text"
            placeholder="Search for products..."
            className="px-4 focus:outline-none text-black placeholder:text-black w-full"
          />
          <button className="bg-black text-white rounded-r-sm py-2 px-8 uppercase -my-1.5 cursor-pointer">
            Search
          </button>
        </div>
        <div className="flex items-center gap-5">
          {/* <button>
            <MagnifyingGlassIcon className="size-5 stroke-2" />
          </button> */}
          <button>
            <HeartIcon className="size-6 stroke-2" />
          </button>
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
