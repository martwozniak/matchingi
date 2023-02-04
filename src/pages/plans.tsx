import React from 'react';
import Header from '../components/Header/Header';
import { BiCheckboxSquare } from 'react-icons/bi';

export default function Plans() {
  return (
    <div className="flex max-h-screen min-h-screen flex-col items-center justify-start  bg-gradient-to-b from-[#140130] to-[#0D0D0D] scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-800">
      <Header />
      <div className="flex min-h-[80px] w-screen  items-center justify-center bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 text-white ">
        <div className="container">
          <span className="text-2xl font-bold">Plans</span>
        </div>
      </div>

      <div className="flex-start container mt-2 flex items-start justify-start text-xs text-white">
        <span>Paid plans for app Starter, Startup Business Enterprise</span>
        <span>And subscription</span>
      </div>
    </div>
  );
}
