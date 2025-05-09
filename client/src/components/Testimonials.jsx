import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const Testimonials = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between">
        <p className="!font-primary text-5xl text-center pb-12">
          OUR HAPPY CUSTOMERS
        </p>
        <div className="flex items-center gap-5">
          <button>
            <ArrowLeftIcon className="size-6 stroke-2 text-black" />
          </button>
          <button>
            <ArrowRightIcon className="size-6 stroke-2 text-black" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="py-7 px-8 border border-black/10 rounded-2xl w-full max-w-sm flex flex-col gap-4">
          <img src="/star.png" alt="" className="w-28 h-auto" />
          <div className="flex items-center gap-4">
            <p className="!font-tertiary text-xl">Saran M.</p>
            <img src="/tick.png" alt="" />
          </div>
          <p className="text-black/60">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
        <div className="py-7 px-8 border border-black/10 rounded-2xl w-full max-w-sm flex flex-col gap-4">
          <img src="/star.png" alt="" className="w-28 h-auto" />
          <div className="flex items-center gap-4">
            <p className="!font-tertiary text-xl">Alex K.</p>
            <img src="/tick.png" alt="" />
          </div>
          <p className="text-black/60">
            "Finding clothes that align with my personal style used to be a
            challenge until I discovered Shop.co. The range of options they
            offer is truly remarkable, catering to a variety of tastes and
            occasions.”
          </p>
        </div>
        <div className="py-7 px-8 border border-black/10 rounded-2xl w-full max-w-sm flex flex-col gap-4">
          <img src="/star.png" alt="" className="w-28 h-auto" />
          <div className="flex items-center gap-4">
            <p className="!font-tertiary text-xl">James L.</p>
            <img src="/tick.png" alt="" />
          </div>
          <p className="text-black/60">
            "As someone who's always on the lookout for unique fashion pieces,
            I'm thrilled to have stumbled upon Shop.co. The selection of clothes
            is not only diverse but also on-point with the latest trends.”
          </p>
        </div>
        <div className="py-7 px-8 border border-black/10 rounded-2xl w-full max-w-sm flex flex-col gap-4">
          <img src="/star.png" alt="" className="w-28 h-auto" />
          <div className="flex items-center gap-4">
            <p className="!font-tertiary text-xl">Mooen G.</p>
            <img src="/tick.png" alt="" />
          </div>
          <p className="text-black/60">
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
