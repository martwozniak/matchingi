import React from "react";
import { RxBackpack } from "react-icons/rx";
import {
  TbReportMoney,
  TbAntennaBars4,
  TbCurrentLocation,
  TbBuilding,
  TbHierarchy,
  TbHourglassLow,
} from "react-icons/tb";
import * as Switch from "@radix-ui/react-switch";

export default function Filters() {
  function extendFilterBox() {
    // change height of the container
    console.log("Box extended");
  }

  return (
    <div className="flex flex-col justify-between overflow-hidden rounded-md  py-2 text-xs text-white sm:flex-row gap-2 mx-4">
      <div
        onClick={extendFilterBox}
        className='text-white py-2  px-4 border border-white/10 rounded-lg justify-center flex gap-4 cursor-pointer bg-transparent w-full transition-all items-center hover:border-white/20'
      >
        <TbReportMoney /> <span>Zarobki</span>
      </div>
      <div className='text-white py-2 px-4 border border-white/10 rounded-lg justify-center flex gap-4 cursor-pointer bg-transparent w-full transition-all items-center hover:border-white/20'>
        <TbHierarchy /> <span>Pozycja</span>
      </div>
      <div className='text-white py-2 px-4 border border-white/10 rounded-lg justify-center flex gap-4 cursor-pointer bg-transparent w-full transition-all items-center hover:border-white/20'>
        <TbHourglassLow /> <span>Doświadczenie</span>
      </div>
      <div className='text-white py-2 px-4 border border-white/10 rounded-lg justify-center flex gap-4 cursor-pointer bg-transparent w-full transition-all items-center hover:border-white/20'>
        <TbCurrentLocation /> <span>Lokalizacja</span>
      </div>
      <div className='text-white py-2 px-4 border border-white/10 rounded-lg justify-center flex gap-4 cursor-pointer bg-transparent w-full transition-all items-center hover:border-white/20'>
        <TbBuilding /> <span>Rodzaj firmy</span>
      </div>
    </div>
  );
}
