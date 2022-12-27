import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";
import Header from "../components/Header/Header";

import Filters from "../components/Filters/Filters";
import SpecialOfferBar from "../components/SpecialOfferBar/SpecialOfferBar";
import Map from "../components/Map/Map";
import SelectMenu from "../components/SelectMenu/SelectMenu";
import SingleJobElement from "../components/SingleJobElement/SingleJobElement";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const { locale, locales, defaultLocale } = useRouter();
  console.log(locale, locales, defaultLocale);
  return (
    <>
      <Head>
        <title>
          matchingi.com - Find best IT JOB as a Software Engineer,
          Administrator, QA, Developer and more
        </title>
        <meta
          name="description"
          content="Job offers for Software Engineers, Administrators, DevOps, QA, Developers, Designers, PMs, C-lvls"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex max-h-screen flex-col items-center justify-start  bg-gradient-to-b from-[#140130] to-[#0D0D0D] scrollbar scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-800">
        <Header />
        <SelectMenu />
        {/*  
        <SpecialOfferBar prompt="Special christmas offer" discount={20} />
        */}
        <div className="flex max-h-full w-full flex-col justify-between sm:flex-row ">
          <div className="__filters hidden w-full">
            <Filters />
          </div>
          <div className="__offers h=full max-h-screen w-full overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-800">
            <Filters />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />

            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
          </div>
          <div className="__map hidden h-full max-h-full w-full sm:flex sm:w-full ">
            <Map />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
