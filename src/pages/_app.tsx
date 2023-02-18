/* eslint-disable @next/next/no-img-element */
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className="p-4">
        <img className="w-32" src="./devchallenges.svg" alt="" />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default MyApp;
