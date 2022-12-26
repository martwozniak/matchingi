import React from "react";
import { RxCrosshair2, RxLapTimer, RxBackpack } from "react-icons/rx";

export default function SingleJobElement() {
  return (
    <div className="mx-2 my-2 cursor-pointer rounded-md bg-white/10 py-3 px-3 text-xs text-white hover:bg-white/20">
      <div>
        <strong>Senior Java Software Engineer</strong>
      </div>
      <div className="flex gap-2 pt-2">
        <div className="flex items-center justify-center gap-2">
          <RxCrosshair2 />
          <span>Warsaw</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <RxLapTimer />
          <span>Senior</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <RxBackpack />
          <span>B2B / UOP / UZ / UOD</span>
        </div>
      </div>
    </div>
  );
}
