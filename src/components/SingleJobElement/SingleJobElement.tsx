import React from "react";
import {
  RxCrosshair2,
  RxLapTimer,
  RxBackpack,
  RxDotsHorizontal,
  RxPaperPlane,
} from "react-icons/rx";

export default function SingleJobElement() {
  return (
    <div className="mx-2 my-2 flex cursor-pointer justify-between rounded-md bg-white/10 py-3 px-3 text-xs text-white hover:bg-white/20">
      <div>
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
        <div className="flex gap-2 pt-2">
          <div className="rounded-md bg-black p-2 hover:opacity-75">Redis</div>
          <div className="rounded-md bg-black p-2 hover:opacity-75">
            Postgres
          </div>
          <div className="rounded-md bg-black p-2 hover:opacity-75">SQL</div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="Salary rounded-md bg-black py-2 px-6">
          <span>17 000 - 35 000 PLN</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex w-full items-center justify-center gap-4 rounded-md bg-green-600 py-2 px-2">
            <RxPaperPlane /> <span>Fast apply</span>
          </div>
        </div>
      </div>
    </div>
  );
}
