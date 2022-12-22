import Link from "next/link";
import React from "react";

type Props = {
  prompt: string;
  discount: number;
};

export default function SpecialOfferBar({ prompt, discount }: Props) {
  return (
    <div className="mb-2 w-full">
      <Link href="/">
        <div className="flex w-full justify-center bg-gradient-to-r from-yellow-600 to-yellow-600  px-8 py-2 text-white">
          <span>
            {prompt} - <strong>{discount}% </strong> discount 🚀{" "}
          </span>
        </div>
      </Link>
    </div>
  );
}
