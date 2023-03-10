import React from 'react';
import {
  RxCrosshair2,
  RxLapTimer,
  RxBackpack,
  RxDotsHorizontal,
  RxPaperPlane,
  RxLetterCaseCapitalize,
} from 'react-icons/rx';
import { useTranslation } from 'next-i18next';

import FileUploaderComponent from '../FileUploaderComponent/FileUploaderComponent';
import Link from 'next/link';

export default function SingleJobElement() {
  const [isOpen, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('Error');

  const isItHidden = isOpen ? '' : 'hidden';
  const { t } = useTranslation('common');

  function showRegisterPopup() {
    alert(
      'To use Fast apply You have to register and upload your Resume and motivation letter! Please create account 🚀'
    );
  }

  function onFormSubmit(event: any) {
    event.preventDefault();
    // TODO: Login user, check credentionals
  }

  return (
<<<<<<< Updated upstream
    <div>
      <div className={isItHidden}>
        <div className="absolute top-0 left-0 z-50 h-screen max-h-screen w-screen bg-black/70 transition-all">
          <div className="flex h-full items-center justify-center text-white transition-all">
            <div className="min-h-[760px] min-w-[220px] bg-gray-900 px-4 py-2 transition-all sm:min-w-[80vw]">
              <div className="__top_of_modal flex items-center justify-between">
                <span className="px-4">Podgląd oferty pracy </span>

                <Link href="/" as="/">
                  <div
                    className="closeButton cursor-pointer px-4 py-2"
                    onClick={() => setOpen((s) => !s)}
                  >
                    X
                  </div>
                </Link>
              </div>
              <div className="mx-4">
                <div className="flex flex-row justify-between">
                  <div className="flex">
                    <div>
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
                        <div className="rounded-md bg-black p-2 hover:opacity-75">
                          SQL
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <img
                      src="/img/icons/react/react-original.svg"
                      alt="Company name logo"
                      className="h-[64px] max-h-[64px] w-[64px] max-w-[64px]"
                    />
                  </div>
                </div>

                <div className="flex max-w-5xl flex-col gap-2 pt-2">
                  <span>Description:</span>
                  <span>
                    We are seeking a Senior Java Software Engineer to join our
                    dynamic team. In this role, you will be responsible for
                    designing, developing and maintaining our Java-based
                    applications.
                    <br /> <br />
                    Responsibilities: <br />
                    Design, develop and maintain Java-based applications <br />
                    Collaborate with cross-functional teams to define, design,
                    and ship new features <br />
                    Participate in code reviews, ensuring adherence to coding
                    standards and best practices <br />
                    Troubleshoot and debug production issues <br />
                    Continuously discover, evaluate, and implement new
                    technologies to maximize development efficiency <br />
                    <br />
                    Requirements: <br />
                    Strong experience with Java, Spring, and Hibernate <br />
                    Experience with web development frameworks such as AngularJS
                    or React <br />
                    Strong understanding of software development principles and
                    design patterns <br />
                    Experience with Agile methodologies and test-driven
                    development <br />
                    Ability to work independently and as part of a team <br />
                    Bachelors degree in Computer Science or related field <br />
                    Minimum of 5 years of experience in software development{' '}
                    <br />
                    This is a full-time position with competitive salary and
                    benefits package. If you are a highly motivated individual
                    with a passion for software development, we would love to
                    hear from you! <br />
                  </span>
                </div>
              </div>

              <div>
                <form
                  className="my-6 mx-4 flex flex-col gap-2"
                  onSubmit={onFormSubmit}
                >
                  <input
                    type={'text'}
                    placeholder="Imię i nazwisko"
                    name="dane"
                    className="rounded-lg border border-white/10 bg-transparent p-4 transition-all"
                  />
                  <input
                    type={'text'}
                    placeholder="Adres e-mail"
                    name="email"
                    className="rounded-lg border border-white/10 bg-transparent p-4 transition-all"
                  />
                  <input
                    type={'textarea'}
                    placeholder="Dodatkowe uwagi do ogłoszenia"
                    name="opis"
                    className="rounded-lg border border-white/10 bg-transparent p-4 transition-all"
                  />
                  <FileUploaderComponent />
                </form>
              </div>

              <div className="register_button mt-4">
                <div className="button_ mx-4 flex cursor-pointer items-center justify-center gap-4 rounded-lg border border-white/10 bg-green-500/60 p-4 transition-all hover:bg-green-500/80">
                  <div>
                    <RxCrosshair2 />
                  </div>
                  <div>Apply </div>
                </div>
              </div>

              <div className="mt-4 flex flex-col items-center justify-center gap-2 text-xs">
                <div className="flex max-w-5xl">
                  <div className="mx-4 text-white/60">
                    <span className="font-bold">Uwaga</span>: Przesyłając dane z
                    wykorzystaniem powyższego kwestionariusza oświadczasz że
                    zapoznałeś się z RODO / GDPR i wyrażasz zgodę na
                    przetwarzanie Twoich danych w celu przeprowadzenia procesu
                    rekrutacyjnego w firmie FasFSol Sp. z o.o
                  </div>
                  <div className="mx-4 flex items-center justify-center text-white/30">
                    Korzystając z serwisu wyrażasz zgodę na RODO, TOS oraz
                    Cookies
                  </div>
                </div>
              </div>
=======
    <div className="mx-2 my-2 flex cursor-pointer justify-between rounded-md bg-white/10 py-3 px-3 text-xs text-white backdrop-blur-sm hover:bg-white/20">
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
>>>>>>> Stashed changes
            </div>
          </div>
        </div>
      </div>
      {/** TODO: Add offer parameter dynamic */}
      <Link href={'/?offer=1'} as="/1">
        <div
          className="mx-4 my-2 flex cursor-pointer justify-between rounded-md border border-gray-600/20 bg-gray-600/10 py-3 px-3 text-xs text-white transition-all hover:bg-gray-600/20"
          onClick={() => setOpen((s) => !s)}
        >
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
                <div className="rounded-md bg-black p-2 hover:opacity-75">
                  SQL
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="Salary rounded-md bg-black py-2 px-2 md:px-6">
              <span>17 000 - 35 000 PLN</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex w-full items-center justify-center gap-4 rounded-md bg-green-600 py-2 px-2 transition hover:bg-green-500">
                <RxPaperPlane /> <span>Fast apply</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
