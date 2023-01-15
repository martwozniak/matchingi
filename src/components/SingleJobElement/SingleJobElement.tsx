import React from "react";
import {
  RxCrosshair2,
  RxLapTimer,
  RxBackpack,
  RxDotsHorizontal,
  RxPaperPlane,
  RxLetterCaseCapitalize,
} from "react-icons/rx";
import { useTranslation } from 'next-i18next';
export default function SingleJobElement() {

  const [isOpen, setOpen] = React.useState(false);
  const isItHidden = isOpen ? "" : "hidden";
  const { t } = useTranslation("common");

  function showRegisterPopup() {
    alert(
      "To use Fast apply You have to register and upload your Resume and motivation letter! Please create account 🚀"
    );
  }

  function onFormSubmit(event: any) {
    event.preventDefault();
    // TODO: Login user, check credentionals 
  }

  return (
    <div>
      <div className={isItHidden}>
        <div className='w-screen h-screen transition-all max-h-screen bg-black/70 z-50 absolute top-0 left-0'>
          <div className='text-white transition-all h-full flex justify-center items-center'>
            <div className='bg-gray-900 transition-all px-4 py-2 min-h-[760px] min-w-[220px] sm:min-w-[80vw]'>
              <div className='__top_of_modal flex justify-between items-center'>
                <span>Podgląd oferty pracy</span>

                <div className='closeButton cursor-pointer px-4 py-2' onClick={() => setOpen(s => !s)}>X</div>
              </div>

              <div className='register_button mt-4'>
                <div className='button_ p-4 border border-white/10 bg-green-500/60 rounded-lg justify-center mx-4 flex gap-4 cursor-pointer hover:bg-green-500/80 transition-all items-center'>
                  <div>
                    <RxCrosshair2 />
                  </div>
                  <div>Apply </div>
                </div>
              </div>


              <div className='flex items-center justify-center mt-4 text-xs flex-col gap-2'>
                <div className="max-w-5xl flex">
                  <div className='text-white/60 mx-4'><span className='font-bold'>Uwaga</span>: Przesyłając dane z wykorzystaniem powyższego kwestionariusza oświadczasz że zapoznałeś się z RODO / GDPR i wyrażasz zgodę na przetwarzanie Twoich danych w celu przeprowadzenia procesu rekrutacyjnego w firmie FasFSol Sp. z o.o</div>
                  <div className='text-white/30 mx-4 flex items-center justify-center'>Korzystając z serwisu wyrażasz zgodę na RODO, TOS oraz Cookies</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 my-2 flex cursor-pointer justify-between rounded-md transition-all border border-gray-600/20 bg-gray-600/10 py-3 px-3 text-xs text-white hover:bg-gray-600/20"
        onClick={() => setOpen(s => !s)}>
        <div className="flex flex-row gap-2">
          <div className="flex items-center justify-center">
            <img
              src="/img/icons/react/react-original.svg"
              alt="Company name logo"
              className="h-[64px] max-h-[64px] w-[64px] max-w-[64px]"
            />
          </div>
          <div className="flex flex-col">
            <div>
              <strong>Senior Java Software Engineer</strong>
            </div>
            <div className="flex gap-2 pt-2">
              <div className="flex items-center justify-center gap-2">
                <RxCrosshair2 />
                <span>Warsaw</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <RxLapTimer />
                <span>Senior</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <RxBackpack />
                <span>B2B {/* / UOP / UZ / UOD */}</span>
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <div className="rounded-md bg-black p-2 hover:opacity-75">
                Redis
              </div>
              <div className="rounded-md bg-black p-2 hover:opacity-75">
                Postgres
              </div>
              <div className="rounded-md bg-black p-2 hover:opacity-75">SQL</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="Salary rounded-md bg-black py-2 px-2 md:px-6">
            <span>17 000 - 35 000 PLN</span>
          </div>
          <div className="flex items-center justify-between">
            <div
              onClick={showRegisterPopup}
              className="flex w-full items-center justify-center gap-4 rounded-md bg-green-600 py-2 px-2 transition hover:bg-green-500"
            >
              <RxPaperPlane /> <span>Fast apply</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
