import Link from "next/link";
import React from "react";
import { RxPinRight, RxPlus, RxPaperPlane } from "react-icons/rx";

export default function Header() {
  return (
    <div className="site__heading mb-2 mt-2 flex min-h-[60px] w-full flex-col items-center justify-between gap-2 px-8 sm:flex-row">
      <Link href={"/"}>
        <span className="hover:opacity-85 cursor-pointer select-none text-white hover:opacity-75">
          <span className="bold font-bold text-green-400 ">match</span>
          ingi
        </span>
      </Link>

      <div className="flex gap-4">
        <Link href={"/login"}>
          <div className="hover:opacity-85 flex cursor-pointer select-none items-center gap-2 rounded-md bg-gray-600/60 px-4 py-2  text-sm font-semibold text-white transition hover:bg-gray-600/70">
            <RxPinRight /> <span>Log in</span>
          </div>
        </Link>
        <Link href={"/add-offer"}>
          <div className="floating-buy-button-container hover:opacity-85 flex cursor-pointer select-none items-center gap-2 rounded-md  bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-lg  transition hover:bg-green-500">
            <RxPaperPlane /> {/* RxPlus */}
            <span>
              Add job post for <span className="font-bold">47$</span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
