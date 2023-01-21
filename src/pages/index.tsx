import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../next-i18next.config.mjs";

import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";
import Header from "../components/Header/Header";

import Filters from "../components/Filters/Filters";
import SpecialOfferBar from "../components/SpecialOfferBar/SpecialOfferBar";
import Map from "../components/Map/Map";
import SelectMenu from "../components/SelectMenu/SelectMenu";
import SingleJobElement from "../components/SingleJobElement/SingleJobElement";
import BottomCTA from "../components/BottomCTA/BottomCTA";

import SpecialOffer from "../components/SpecialOfferInJobList/SpecialOffer";
import Searchbar from "../components/Searchbar/Searchbar";


export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18nConfig, [
      "en",
      "pl",
    ])),
  },
});


const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const { locale, locales, defaultLocale } = useRouter();
  console.log(locale, locales, defaultLocale);

  const { t } = useTranslation("common");

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
      <main className="flex max-h-screen h-full flex-col items-center justify-start  bg-gradient-to-b from-black to-[#0D0D0D] overflow-x-none">
        <Header />
        <div className="flex gap-2 items-center w-screen mt-6 sm:mt-0 max-w-screen">
          <Searchbar />
          <SelectMenu />
        </div>

        {/*  
        <SpecialOfferBar prompt="Special christmas offer" discount={20} />
        */}
        <div className="flex max-h-full w-full flex-col justify-between sm:flex-row ">
          <div className="__filters hidden w-full">
            <Filters />
          </div>
          <div className="__offers h-full max-h-screen sm:max-h-[85vh] w-full overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-gray-900">
            <Filters />
            <SingleJobElement />
            <SingleJobElement />
            <span>{t("this-stack-uses")}</span>
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SingleJobElement />
            <SpecialOffer />
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
              Hello from trpc
            </p>
            <AuthShowcase />
          </div>
          <div className="__map hidden h-full max-h-full w-full sm:flex sm:w-full ">
            <Map />
          </div>
        </div>
        <BottomCTA />
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
