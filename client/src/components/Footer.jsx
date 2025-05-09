import React from "react";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    // <div className="bg-black">
    //   <div className="container mx-auto">
    //     <div className="flex justify-between py-14">
    //       <div className="flex flex-col gap-2">
    //         <p className="!font-primary text-white text-4xl">SHOP.CO</p>
    //         <div className="flex items-center justify-between">
    //           <button className="text-white">
    //             <i class="ri-facebook-fill"></i>
    //           </button>
    //           <button className="text-white">
    //             <i class="ri-twitter-fill"></i>
    //           </button>
    //           <button className="text-white">
    //             <i class="ri-instagram-fill"></i>
    //           </button>
    //           <button className="text-white">
    //             <i class="ri-whatsapp-fill"></i>
    //           </button>
    //         </div>
    //       </div>
    //       <div>
    //         <p className="text-white !font-tertiary uppercase mb-8">Quick Links</p>
    //         <ul className="text-white/60 flex flex-col gap-3 text-sm">
    //           <li>Home</li>
    //           <li>About Us</li>
    //           <li>Shop</li>
    //           <li>On Sale</li>
    //           <li>New Arrivals</li>
    //           <li>Brands</li>
    //           <li>Contact Us</li>
    //         </ul>
    //       </div>
    //       <div>
    //         <p className="text-white !font-tertiary uppercase mb-8">About</p>
    //         <ul className="text-white/60 flex flex-col gap-3 text-sm">
    //           <li>How Its Work</li>
    //           <li>Our Packages</li>
    //           <li>Promotions</li>
    //           <li>Refer a friend</li>
    //           <li>New Arrivals</li>
    //         </ul>
    //       </div>
    //       <div>
    //         <p className="text-white !font-tertiary uppercase mb-8">Help Centre</p>
    //         <ul className="text-white/60 flex flex-col gap-3 text-sm">
    //           <li>Payments</li>
    //           <li>Shipping</li>
    //           <li>Product Returns</li>
    //           <li>FAQs</li>
    //           <li>Checkout</li>
    //           <li>Other Issues</li>
    //         </ul>
    //       </div>
    //     </div>
    //     <Copyright />
    //   </div>
    // </div>
    <div className="bg-[#F0F0F0] py-14">
      <div className="container mx-auto">
        <div className="flex justify-between mb-8">
          <div className="flex flex-col gap-6">
            <p className="!font-primary text-black text-4xl">SHOP.CO</p>
            <p className="text-black/60 text-sm max-w-xs ww-full">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex items-center gap-6">
              <button className="text-black bg-white size-7 text-sm border border-black/20 rounded-full flex items-center justify-center">
                <i class="ri-twitter-fill"></i>
              </button>
              <button className="text-white bg-black size-7 text-sm border border-black/20 rounded-full flex items-center justify-center">
                <i class="ri-facebook-fill"></i>
              </button>
              <button className="text-black bg-white size-7 text-sm border border-black/20 rounded-full flex items-center justify-center">
                <i class="ri-instagram-line"></i>
              </button>
              <button className="text-black bg-white size-7 text-sm border border-black/20 rounded-full flex items-center justify-center">
                <i class="ri-github-fill"></i>
              </button>
            </div>
          </div>
          <div>
            <p className="text-black !font-tertiary uppercase mb-8">Company</p>
            <ul className="text-black/60 flex flex-col gap-3">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <p className="text-black font-semibold uppercase mb-8">Help</p>
            <ul className="text-black/60 flex flex-col gap-3">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <p className="text-black font-semibold uppercase mb-8">FAQ</p>
            <ul className="text-black/60 flex flex-col gap-3">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
          <div>
            <p className="text-black font-semibold uppercase mb-8">Resources</p>
            <ul className="text-black/60 flex flex-col gap-3">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-black/10 pt-8">
          <p className="text-sm text-black/60">
            Shop.co © 2000-2021, All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-8 bg-white rounded-sm p-1.5 flex justify-center items-center">
              <img src="/payment-logo/visa.png" alt="" />
            </div>
            <div className="w-12 h-8 bg-white rounded-sm p-2 flex justify-center items-center">
              <img src="/payment-logo/mastercard.png" alt="" />
            </div>
            <div className="w-12 h-8 bg-white rounded-sm p-1.5 flex justify-center items-center">
              <img src="/payment-logo/paypal.png" alt="" />
            </div>
            <div className="w-12 h-8 bg-white rounded-sm p-1.5 flex justify-center items-center">
              <img src="/payment-logo/apple_pay.png" alt="" />
            </div>
            <div className="w-12 h-8 bg-white rounded-sm p-1.5 flex justify-center items-center">
              <img src="/payment-logo/gpay.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
