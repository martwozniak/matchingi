import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Header from "../../components/Header/Header";
import SelectMenu from "../../components/SelectMenu/SelectMenu";
import Filters from "../../components/Filters/Filters";
import SingleJobElement from "../../components/SingleJobElement/SingleJobElement";
import Map from "../../components/Map/Map";
export default function Index() {
  const router = useRouter();
  const { offerId } = router.query;
  //const offerId = router.query.offerId as string;
  // return <div>Offer Id: {offerId} </div>;

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
      <main className="flex max-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#140130] to-[#0D0D0D] scrollbar scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-800">
        <Header />
        <SelectMenu />
        {/*  
        <SpecialOfferBar prompt="Special christmas offer" discount={20} />
        */}
        <div className="flex max-h-full w-full flex-col justify-between sm:flex-row ">
          <div className="__filters hidden w-full">
            <Filters />
          </div>
          <div className="__offers h=full max-h-[92vh] w-full overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-800">
            <SingleJobElement />
            <div>{offerId}</div>
          </div>
          <div className="__map hidden h-full max-h-full w-full sm:flex sm:w-full ">
            <Map />
          </div>
        </div>
      </main>
    </>
  );
}
