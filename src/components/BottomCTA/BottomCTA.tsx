import React from "react";

export default function BottomCTA() {
  return (
    <div className="absolute bottom-0 flex min-h-[80px] w-full flex-col items-center justify-center gap-1 bg-gray-900 text-white">
      <div className="floating-buy-button-container flex w-full max-w-xl cursor-pointer items-center justify-center rounded-md bg-green-600 py-2 px-8">
        Add job post for 47$
      </div>
      <div className="text-xs">Order now and claim 13% discount</div>
    </div>
  );
}
