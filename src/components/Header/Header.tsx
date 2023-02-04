import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AddJobModal from '../AddJobModal/AddJobModal';
import LoginModal from '../LoginModal/LoginModal';
import MegaMenu from '../MegaMenu/MegaMenu';

export default function Header() {
  const { status } = useSession();
  const { push } = useRouter();

  return (
    <div className="site__heading mt-2 flex min-h-[70px] w-full flex-col items-center justify-between gap-2 px-8 sm:min-h-[60px] sm:flex-row">

      <div className="flex justify-center items-center gap-8">
        <Link href={'/'}>
          {/* <span className="hover:opacity-85 cursor-pointer select-none text-white hover:opacity-75">
          <span className="bold font-bold text-green-400 ">match</span>
          ingi
        </span> */}
          <div className='flex items-center justify-center'>
            <img src="/img/rects.svg" alt="img" className='max-h-[24px] mt-[-1px] mr-1' />
            <img
              src="/img/Matchingi_white.svg"
              alt="Logo"
              className="max-h-[16px]"
            />
          </div>

        </Link>

        <MegaMenu />
      </div>

      <div className="flex gap-4">
        {/* 
        <Link href={"/login"}>
          <div className="hover:opacity-85 flex cursor-pointer select-none items-center gap-2 rounded-md bg-gray-600/60 px-4 py-2  text-sm font-semibold text-white transition hover:bg-gray-600/70" onClick={() => {
            if (status === "unauthenticated") {
              signIn("discord", { callbackUrl: "/dashboard" });
            } else if (status === "authenticated") {
              push("/dashboard");
            }
          }}
          >
            <RxPinRight /> <span>Log in</span>
          </div>
        </Link>*/}
        <LoginModal />
        <AddJobModal />
      </div>
    </div>
  );
}
