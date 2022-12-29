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
    <div className="mx-2 my-2 flex flex-row justify-between overflow-hidden rounded-md bg-white/10 px-8 py-2 text-xs text-white sm:flex-row ">
      <div
        onClick={extendFilterBox}
        className="flex cursor-pointer items-center gap-2 rounded-md bg-white/5 px-2 py-2 text-xs font-semibold text-white hover:bg-white/20"
      >
        <TbReportMoney /> <span>Zarobki</span>
      </div>
      <div className="flex cursor-pointer items-center gap-2 rounded-md bg-white/5 px-2 py-2 text-xs font-semibold text-white hover:bg-white/20">
        <TbHierarchy /> <span>Pozycja</span>
      </div>
      <div className="flex cursor-pointer items-center gap-2 rounded-md bg-white/5 px-2 py-2 text-xs font-semibold text-white hover:bg-white/20">
        <TbHourglassLow /> <span>Doświadczenie</span>
      </div>
      <div className="flex cursor-pointer items-center gap-2 rounded-md bg-white/5 px-2 py-2 text-xs font-semibold text-white hover:bg-white/20">
        <TbCurrentLocation /> <span>Lokalizacja</span>
      </div>
      <div className="flex cursor-pointer items-center gap-2 rounded-md bg-white/5 px-2 py-2 text-xs font-semibold text-white hover:bg-white/20">
        <TbBuilding /> <span>Rodzaj firmy</span>
      </div>
      <div className="RemoteSwitch flex items-center justify-center">
        <span className="flex hidden h-3 w-3 sm:flex">
          <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
        </span>
      </div>
    </div>
  );
}
