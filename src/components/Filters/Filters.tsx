import React from 'react';
import { RxBackpack } from 'react-icons/rx';
import {
  TbReportMoney,
  TbAntennaBars4,
  TbCurrentLocation,
  TbBuilding,
  TbHierarchy,
  TbHourglassLow,
} from 'react-icons/tb';
import * as Switch from '@radix-ui/react-switch';

export default function Filters() {
  function extendFilterBox() {
    // change height of the container
    console.log('Box extended');
  }

  return (
    <div className="mx-4 flex flex-col justify-between gap-2  overflow-hidden rounded-md py-2 text-xs text-white sm:flex-row">
      <div
        onClick={extendFilterBox}
        className="flex w-full  cursor-pointer items-center justify-center gap-4 rounded-lg border border-white/10 bg-transparent py-2 px-4 text-white transition-all hover:border-white/20"
      >
        <TbReportMoney /> <span>Zarobki</span>
      </div>
      <div className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-lg border border-white/10 bg-transparent py-2 px-4 text-white transition-all hover:border-white/20">
        <TbHierarchy /> <span>Pozycja</span>
      </div>
      <div className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-lg border border-white/10 bg-transparent py-2 px-4 text-white transition-all hover:border-white/20">
        <TbHourglassLow /> <span>Doświadczenie</span>
      </div>
      <div className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-lg border border-white/10 bg-transparent py-2 px-4 text-white transition-all hover:border-white/20">
        <TbCurrentLocation /> <span>Lokalizacja</span>
      </div>
      <div className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-lg border border-white/10 bg-transparent py-2 px-4 text-white transition-all hover:border-white/20">
        <TbBuilding /> <span>Rodzaj firmy</span>
      </div>
    </div>
  );
}
