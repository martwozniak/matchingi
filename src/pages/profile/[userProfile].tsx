import React from "react";
import Header from "../../components/Header/Header";

export default function Profile() {
  return (
    <div className="flex max-h-screen min-h-screen flex-col items-center justify-start  bg-gradient-to-b from-[#140130] to-[#0D0D0D] scrollbar scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-800">
      <Header />
      <div className="flex flex-col">
        <div className="profile__background flex min-h-[220px] w-screen items-end justify-center bg-green-900/20 py-2 text-white">
          <div className="container flex items-end gap-2">
            <div className="profile__picture">
              <img
                src="/img/avatar.jpg"
                alt="Avatar"
                className="max-h-[128px] max-w-[128px]"
              />
            </div>
            <div className="flex flex-col ">
              <span className="profile__name  text-4xl">Sabrina Stone</span>
              <span className="italic">Software Developer</span>
              <span className="text-xs italic">sabrina@sabrinastone.com</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-5 text-white">
          <div className="container flex">
            <span className="text-3xl">Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
}
