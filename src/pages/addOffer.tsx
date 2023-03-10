import Header from '../components/Header/Header';

export default function AddOffer() {
  return (
    <div className="flex max-h-screen min-h-screen flex-col items-center justify-start  bg-gradient-to-b from-[#140130] to-[#0D0D0D] scrollbar scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-800">
      <Header />
      <div className="flex min-h-[80px] w-screen w-full items-center justify-center bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 text-white ">
        <div className="container">
          <span className="text-4xl font-bold">Place your order</span>
          {/* TODO: Add order form */}
          {/* DEV Branch Test */}
        </div>
      </div>
    </div>
  );
}
