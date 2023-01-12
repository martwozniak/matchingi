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
    ROLE
} from 'baseui/modal';
import { RxDotsHorizontal, RxPinRight } from 'react-icons/rx';
import { KIND as ButtonKind } from "baseui/button";
import { useTranslation } from 'next-i18next';
import { TbDoorEnter, TbRegistered } from 'react-icons/tb';



export default function LoginModal() {
    const [isOpen, setOpen] = React.useState(false);
    let isItHidden = isOpen ? "" : "hidden";
    const { t } = useTranslation("common");

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
                <div className='w-screen h-screen transition-all max-h-screen bg-black/70 z-50 absolute top-0 left-0'>
                    <div className='text-white transition-all h-full flex justify-center items-center'>
                        <div className='bg-gray-900 transition-all px-4 py-2 min-h-[760px] min-w-[520px]'>
                            <div className='__top_of_modal flex justify-between items-center'>
                                <span>{t("page.login.title")}</span>

                                <div className='closeButton cursor-pointer px-4 py-2' onClick={() => setOpen(s => !s)}>X</div>
                            </div>

                            <div className='flex gap-4 justify-center mt-6 mx-4'>

                                <div className='w-full'>
                                    <div>
                                        <div className='button_ p-4 border border-white/10 rounded-lg flex gap-4 cursor-pointer hover:bg-white/10 items-center w-full transition-all'>
                                            <div><img src="/img/icons/google/google-original.svg" alt="Google" className='min-w-[24px]' /></div>
                                            <div>Login with Google</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-full'>
                                    <div>
                                        <div className='button_ p-4 border border-white/10 rounded-lg flex gap-4 cursor-pointer hover:bg-white/10 items-center w-full transition-all'>
                                            <div><img src="/img/icons/facebook/facebook-original.svg" alt="Google" className='min-w-[24px]' /></div>
                                            <div>Login with Facebook</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='flex items-center justify-center mt-4 text-xs'>
                                <span className='text-white/60'>lub zaloguj się poprzez e-mail</span>
                            </div>
                            <div className='login_form'>
                                <form className='flex flex-col gap-2 my-6 mx-4' onSubmit={onFormSubmit}>
                                    <input type={'text'} placeholder='e-mail' name="email" className='p-4 border border-white/10 rounded-lg bg-transparent transition-all' />
                                    <input type={'password'} placeholder='password' name="password" className='p-4 border border-white/10 rounded-lg bg-transparent transition-all' />
                                    <input type={'submit'} value={"Log in  📲 "} name="send" className='p-4 border border-white/10 rounded-lg bg-blue-500/5 mt-4 cursor-pointer transition-all hover:bg-blue-500/20' />
                                </form>
                            </div>
                            <div className='register_button mt-4'>
                                <div className='button_ p-4 border border-white/10 rounded-lg justify-center mx-4 flex gap-4 cursor-pointer hover:bg-white/10 transition-all items-center'>
                                    <div>
                                        <RxDotsHorizontal />
                                    </div>
                                    <div>Register new account </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-center mt-4 text-xs'>
                                <span className='text-white/60'>lub zamów ogłoszenie bez logowania</span>
                            </div>
                            <div className='flex items-center justify-center mt-4'>
                                <div className="floating-buy-button-container flex w-full max-w-xl cursor-pointer items-center justify-center rounded-md bg-green-600 py-6 px-8 mx-2">
                                    <span>Add job post for 47$ (without login)</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-center mt-4 text-xs max-w-xl'>
                                <div className='text-white/60 mx-4'><span className='font-bold'>Uwaga</span>: Pamiętaj, aby dokładnie sprawdzić dane dot. zamówienia. Na Twój adres e-mail wyślemy specjalny link pozwalający na edycję ogłoszenia. Dlatego upewnij się, że adres e-mail jest poprawny.</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="hover:opacity-85 flex cursor-pointer select-none items-center gap-2 rounded-md bg-gray-600/60 px-4 py-2  text-sm font-semibold text-white transition hover:bg-gray-600/70"
                onClick={() => setOpen(s => !s)}
            >
                <RxPinRight /> <span>Log in</span>
            </div>
        </React.Fragment >
    );
}