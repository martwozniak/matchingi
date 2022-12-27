import React from "react";
import Header from "../components/Header/Header";
import Link from "next/link";
import { RxPaperPlane } from "react-icons/rx";

export default function SystemStatus() {
  return (
    <div className="h-screen min-h-screen bg-black">
      <Header />
      <div className="flex items-center justify-center text-2xl text-white">
        <div className="container flex flex-col items-center justify-center">
          <span>System status:</span>
          <div className="min-w-2xl w-full max-w-3xl py-2">
            <Link href={"/add-offer"}>
              <div className="hover:opacity-85 flex cursor-pointer select-none items-center gap-2 rounded-md  bg-gray-600/60  px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-600/70">
                <span className="flex h-3 w-3">
                  <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                </span>
                <span>
                  <span className="font-bold">API.MATCHINGI.COM</span>
                  <span> - Our API layer</span>
                </span>
                <span className="bg-grey-700 absolute inline-flex h-3 w-3 animate-ping rounded-full opacity-75"></span>
              </div>
            </Link>
          </div>
          <div className="min-w-2xl w-full max-w-3xl py-2">
            <Link href={"/add-offer"}>
              <div className="hover:opacity-85 flex cursor-pointer select-none items-center gap-2 rounded-md  bg-gray-600/60  px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-600/70">
                <span className="flex h-3 w-3">
                  <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>
                <span>
                  <span className="font-bold">API.MATCHINGI.COM</span>
                  <span> - Our API layer</span>
                </span>
                <span className="bg-grey-700 absolute inline-flex h-3 w-3 animate-ping rounded-full opacity-75"></span>
              </div>
            </Link>
          </div>
          <div className="min-w-2xl w-full max-w-3xl py-2">
            <Link href={"/add-offer"}>
              <div className="hover:opacity-85 flex cursor-pointer select-none items-center gap-2 rounded-md  bg-gray-600/60  px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-600/70">
                <span className="flex h-3 w-3">
                  <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-gray-600/60 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-gray-600/70"></span>
                </span>
                <span>
                  <span className="font-bold">API.MATCHINGI.COM</span>
                  <span> - Our API layer</span>
                </span>
                <span className="bg-grey-700 absolute inline-flex h-3 w-3 animate-ping rounded-full opacity-75"></span>
              </div>
            </Link>
          </div>
          <div className="min-w-2xl w-full max-w-3xl py-2">
            <Link href={"/add-offer"}>
              <div className="hover:opacity-85 flex cursor-pointer select-none items-center gap-2 rounded-md  bg-gray-600/60  px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-600/70">
                <span className="flex h-3 w-3">
                  <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                </span>
                <span>
                  <span className="font-bold">API.MATCHINGI.COM</span>
                  <span> - Our API layer</span>
                </span>
                <span className="bg-grey-700 absolute inline-flex h-3 w-3 animate-ping rounded-full opacity-75"></span>
              </div>
            </Link>
          </div>
          <div className="min-w-2xl w-full max-w-3xl py-2">
            <Link href={"/add-offer"}>
              <div className="hover:opacity-85 flex cursor-pointer select-none items-center gap-2 rounded-md  bg-gray-600/60  px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-600/70">
                <span className="flex h-3 w-3">
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-gray-600/60"></span>
                </span>
                <span>
                  <span className="font-bold">API.MATCHINGI.COM</span>
                  <span> - Our API layer</span>
                </span>
                <span className="bg-grey-700 absolute inline-flex h-3 w-3 animate-ping rounded-full opacity-75"></span>
              </div>
            </Link>
          </div>
          <div className="min-w-2xl w-full max-w-3xl py-2">
            <Link href={"/add-offer"}>
              <div className="hover:opacity-85 flex cursor-pointer select-none items-center gap-2 rounded-md  bg-gray-600/60  px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-600/70">
                <span className="flex h-3 w-3">
                  <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                </span>
                <span>
                  <span className="font-bold">API.MATCHINGI.COM</span>
                  <span> - Our API layer</span>
                </span>
                <span className="bg-grey-700 absolute inline-flex h-3 w-3 animate-ping rounded-full opacity-75"></span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
