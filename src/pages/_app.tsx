import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';

import { appWithTranslation } from 'next-i18next';

import en from '../lang/en.json';
import pl from '../lang/pl.json';

import { trpc } from '../utils/trpc';

import '../styles/globals.css';

import nextI18nConfig from '../../next-i18next.config.mjs';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

const I18nApp = appWithTranslation(MyApp, nextI18nConfig);
const TRPCApp = trpc.withTRPC(I18nApp);

export default TRPCApp;
