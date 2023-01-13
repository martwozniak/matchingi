import React from "react";
import Header from "../components/Header/Header";

export default function Order() {
  return <div className="flex max-h-screen min-h-screen flex-col items-center justify-start  bg-gradient-to-b from-[#140130] to-[#0D0D0D] scrollbar scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-800">
    <Header />
    <div className="flex min-h-[80px] w-screen  items-center justify-center bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 text-white ">
      <div className="container">
        <span className="text-2xl font-bold">Select the most suitable product for you</span>
      </div>
    </div>
    <div className="builder bg-red-700 w-full flex overflow-hidden">
      <div className="configurator bg-blue-700 max-w-[60vw] w-full py-6 h-screen overflow-hidden">1 / Type  name of your project</div>
      <div className="preview bg-white max-w-[40vw] w-full py-6 flex items-center justify-center h-screen overflow-hidden">a</div>
    </div>
  </div>;
}
