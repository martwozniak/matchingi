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
import { RxPinRight } from 'react-icons/rx';
import { KIND as ButtonKind } from "baseui/button";
import { useTranslation } from 'next-i18next';

export default function LoginModal() {
    const [isOpen, setOpen] = React.useState(false);
    let isItHidden = isOpen ? "" : "hidden";
    const { t } = useTranslation("common");
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