import React from "react";

export default function Filters() {
  return (
    <div className="mx-2 my-2 flex flex flex-row justify-between rounded-md bg-white/10 px-8 py-2 text-xs text-white ">
      <span className="cursor-pointer rounded-md bg-white/5 px-2 py-2 text-xs font-semibold text-white hover:bg-white/20">
        Filtry
      </span>
      <span className="cursor-pointer rounded-md bg-white/5 px-2 py-2 text-xs font-semibold text-white hover:bg-white/20">
        Zarobki
      </span>
      <span className="cursor-pointer rounded-md bg-white/5 px-2 py-2 text-xs font-semibold text-white hover:bg-white/20">
        Pozycja
      </span>
      <span className="cursor-pointer rounded-md bg-white/5 px-2 py-2 text-xs font-semibold text-white hover:bg-white/20">
        Doświadczenie
      </span>
      <span className="cursor-pointer rounded-md bg-white/5 px-2 py-2 text-xs font-semibold text-white hover:bg-white/20">
        Lokalizacja
      </span>
      <span className="cursor-pointer rounded-md bg-white/5 px-2 py-2 text-xs font-semibold text-white hover:bg-white/20">
        Rodzaj firmy
      </span>
    </div>
  );
}
