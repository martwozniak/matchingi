import React from "react";

export default function Header() {
  return (
    <div className="site__heading flex min-h-[60px] w-full items-center justify-between bg-white px-8">
      <span className="hover:opacity-85 cursor-pointer select-none">
        <span className="bold font-bold text-blue-800">match</span>
        ingi
      </span>

      <div className="flex gap-4">
        <span className="hover:opacity-85 cursor-pointer select-none bg-gray-600 px-4 py-2 font-bold text-white">
          Log in
        </span>
        <span className="hover:opacity-85 cursor-pointer select-none bg-green-700 px-4 py-2 font-bold text-white">
          Add job post for 49$
        </span>
      </div>
    </div>
  );
}
