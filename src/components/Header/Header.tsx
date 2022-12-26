import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="site__heading flex min-h-[60px] w-full items-center justify-between px-8">
      <Link href={"/"}>
        <span className="hover:opacity-85 cursor-pointer select-none text-white">
          <span className="bold font-bold text-green-400">match</span>
          ingi
        </span>
      </Link>

      <div className="flex gap-4">
        <Link href={"/login"}>
          <span className="hover:opacity-85 cursor-pointer select-none rounded-md bg-gray-600/60 px-4 py-2  text-sm font-semibold text-white transition hover:bg-gray-600/70">
            Log in
          </span>
        </Link>
        <Link href={"/add-offer"}>
          <span className="hover:opacity-85 cursor-pointer select-none rounded-md  bg-yellow-700/60 px-4 py-2 text-sm font-semibold text-white transition hover:bg-yellow-700/70">
            Add job post for 49$
          </span>
        </Link>
      </div>
    </div>
  );
}
