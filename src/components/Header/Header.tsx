import Link from "next/link";
import React from "react";
import { RxPinRight, RxPlus } from "react-icons/rx";

export default function Header() {
  return (
    <div className="site__heading flex min-h-[60px] w-full items-center justify-between px-8">
      <Link href={"/"}>
        <span className="hover:opacity-85 cursor-pointer select-none text-white hover:opacity-75">
          <span className="bold font-bold text-green-400">match</span>
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
          <div className="hover:opacity-85 flex cursor-pointer select-none items-center gap-2 rounded-md  bg-green-700/60 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700/70">
            <RxPlus />
            <span>
              Add job post for <span className="font-bold">47$</span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
