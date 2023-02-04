import React from 'react';
import Header from '../components/Header/Header';

export default function Order() {
  return (
    <div className="flex max-h-screen min-h-screen flex-col items-center justify-start  bg-gradient-to-b from-[#140130] to-[#0D0D0D] scrollbar scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-800">
      <Header />
      <div className="flex min-h-[80px] w-screen  items-center justify-center bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 text-white ">
        <div className="container">
          <span className="text-2xl font-bold">
            Select the most suitable product for you
          </span>
        </div>
      </div>
      <div className="builder flex w-full overflow-hidden bg-red-700">
        <div className="configurator h-screen w-full max-w-[60vw] overflow-hidden bg-blue-700 py-6">
          1 / Type name of your project
        </div>
        <div className="preview flex h-screen w-full max-w-[40vw] items-center justify-center overflow-hidden bg-white py-6">
          a
        </div>
      </div>
    </div>
  );
}
