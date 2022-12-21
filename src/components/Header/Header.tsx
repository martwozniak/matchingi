import React from "react";

export default function Header() {
  return (
    <div className="site__heading flex min-h-[60px] w-full items-center justify-between px-8">
      <span className="hover:opacity-85 cursor-pointer select-none text-white">
        <span className="bold font-bold text-yellow-400">match</span>
        ingi
      </span>

      <div className="flex gap-4">
        <span className="hover:opacity-85 cursor-pointer select-none rounded-full bg-gray-600/10 px-4 py-2  text-sm font-semibold text-white transition hover:bg-gray-600/20">
          Log in
        </span>
        <span className="hover:opacity-85 cursor-pointer select-none  rounded-full bg-yellow-700/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-yellow-700/20">
          Add job post for 49$
        </span>
      </div>
    </div>
  );
}
