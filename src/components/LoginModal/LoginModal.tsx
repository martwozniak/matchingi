import * as React from 'react';
import { Button } from 'baseui/button';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
  FocusOnce,
  SIZE,
  ROLE,
} from 'baseui/modal';
import { RxDotsHorizontal, RxPinRight } from 'react-icons/rx';
import { KIND as ButtonKind } from 'baseui/button';
import { useTranslation } from 'next-i18next';
import { TbDoorEnter, TbRegistered } from 'react-icons/tb';
import Link from 'next/link';

export default function LoginModal() {
  const [isOpen, setOpen] = React.useState(false);
  const isItHidden = isOpen ? '' : 'hidden';
  const { t } = useTranslation('common');

  function onFormSubmit(event: any) {
    event.preventDefault();
    // TODO: Login user, check credentionals
  }
  function onOrderFormSubmit(event: any) {
    event.preventDefault();
    // TODO: Move user to order form / Stripe
  }
  function onRegisterFormSubmit(event: any) {
    event.preventDefault();
    // TODO: Redirect to register form / change content of popup to register form
  }

  return (
    <React.Fragment>
      <div className={isItHidden}>
        <div className="absolute top-0 left-0 z-50 h-screen max-h-screen w-screen bg-black/70 transition-all">
          <div className="flex h-full items-center justify-center text-white transition-all">
            <div className="min-h-[760px] min-w-[220px] bg-gray-900 px-4 py-2 transition-all sm:min-w-[520px]">
              <div className="__top_of_modal flex items-center justify-between">
                <span>{t('page.login.title')}</span>
                <Link href="/" as="/">
                  <div
                    className="closeButton cursor-pointer px-4 py-2"
                    onClick={() => setOpen((s) => !s)}
                  >
                    X
                  </div>
                </Link>
              </div>

              <div className="mx-4 mt-6 flex justify-center gap-4">
                <div className="w-full">
                  <div>
                    <div className="button_ flex w-full cursor-pointer items-center gap-4 rounded-lg border border-white/10 p-4 transition-all hover:bg-white/10">
                      <div>
                        <img
                          src="/img/icons/google/google-original.svg"
                          alt="Google"
                          className="min-w-[24px]"
                        />
                      </div>
                      <div>Login with Google</div>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div>
                    <div className="button_ flex w-full cursor-pointer items-center gap-4 rounded-lg border border-white/10 p-4 transition-all hover:bg-white/10">
                      <div>
                        <img
                          src="/img/icons/facebook/facebook-original.svg"
                          alt="Google"
                          className="min-w-[24px]"
                        />
                      </div>
                      <div>Login with Facebook</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center text-xs">
                <span className="text-white/60">
                  lub zaloguj się poprzez e-mail
                </span>
              </div>
              <div className="login_form">
                <form
                  className="my-6 mx-4 flex flex-col gap-2"
                  onSubmit={onFormSubmit}
                >
                  <input
                    type={'text'}
                    placeholder="e-mail"
                    name="email"
                    className="rounded-lg border border-white/10 bg-transparent p-4 transition-all"
                  />
                  <input
                    type={'password'}
                    placeholder="password"
                    name="password"
                    className="rounded-lg border border-white/10 bg-transparent p-4 transition-all"
                  />
                  <input
                    type={'submit'}
                    value={'Log in  📲 '}
                    name="send"
                    className="mt-4 cursor-pointer rounded-lg border border-white/10 bg-blue-500/5 p-4 transition-all hover:bg-blue-500/20"
                  />
                </form>
              </div>
              <div className="register_button mt-4">
                <div className="button_ mx-4 flex cursor-pointer items-center justify-center gap-4 rounded-lg border border-white/10 p-4 transition-all hover:bg-white/10">
                  <div>
                    <RxDotsHorizontal />
                  </div>
                  <div>Register new account </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center text-xs">
                <span className="text-white/60">
                  lub zamów ogłoszenie bez logowania
                </span>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <div className="floating-buy-button-container mx-2 flex w-full max-w-xl cursor-pointer items-center justify-center rounded-md bg-green-600 py-6 px-8">
                  <span>Add job post for 47$ (without login)</span>
                </div>
              </div>
              <div className="mt-4 flex max-w-xl flex-col items-center justify-center gap-2 text-xs">
                <div className="mx-4 text-white/60">
                  <span className="font-bold">Uwaga</span>: Pamiętaj, aby
                  dokładnie sprawdzić dane dot. zamówienia. Na Twój adres e-mail
                  wyślemy specjalny link pozwalający na edycję ogłoszenia.
                  Dlatego upewnij się, że adres e-mail jest poprawny. Po
                  opłaceniu zamówienia na Twój e-mail wyślemy link do edycji
                  zamówienia (Sprawdź również folder SPAM w swojej skrzynce
                  pocztowej)
                </div>
                <div className="mx-4 text-white/30">
                  Korzystając z serwisu wyrażasz zgodę na RODO, TOS oraz Cookies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link href="?login" as="/login">
        <div
          className="hover:opacity-85 flex cursor-pointer select-none items-center gap-2 rounded-md bg-gray-600/60 px-4 py-2  text-sm font-semibold text-white transition hover:bg-gray-600/70"
          onClick={() => setOpen((s) => !s)}
        >
          <RxPinRight /> <span>Log in</span>
        </div>
      </Link>
    </React.Fragment>
  );
}
