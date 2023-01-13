import Link from "next/link";
import React from "react";
import { RxPinRight, RxPlus, RxPaperPlane } from "react-icons/rx";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import LoginModal from "../LoginModal/LoginModal";
import MegaMenu from "../MegaMenu/MegaMenu";

export default function Header() {
  const { status } = useSession();
  const { push } = useRouter();


  return (
    <div className="site__heading mt-2 flex min-h-[70px] sm:min-h-[60px] w-full flex-col items-center justify-between gap-2 px-8 sm:flex-row">
      <div className="flex gap-4 items-center align-center">
        <Link href={"/"}>
          {/* <span className="hover:opacity-85 cursor-pointer select-none text-white hover:opacity-75">
          <span className="bold font-bold text-green-400 ">match</span>
          ingi
        </span> */}
          <img src="/img/logo_4_white.svg" alt="Logo" className="max-h-[46px]" />
        </Link>
        <MegaMenu />
      </div>


      <div className="flex gap-4">
        {/* 
        <Link href={"/login"}>
          <div className="hover:opacity-85 flex cursor-pointer select-none items-center gap-2 rounded-md bg-gray-600/60 px-4 py-2  text-sm font-semibold text-white transition hover:bg-gray-600/70" onClick={() => {
            if (status === "unauthenticated") {
              signIn("discord", { callbackUrl: "/dashboard" });
            } else if (status === "authenticated") {
              push("/dashboard");
            }
          }}
          >
            <RxPinRight /> <span>Log in</span>
          </div>
        </Link>*/}
        <LoginModal />

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
