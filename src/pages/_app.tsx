import { FC } from "react";
import { AppProps as NextAppProps } from 'next/app';
import { NextPage } from "next";
import Head from "next/head";

export interface AppProps extends NextAppProps{
  Component: NextPage;
}

const App: FC<AppProps> = props => {

  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? (page => page);

  return <>
    <Head>
      <title>VBD docs</title>
    </Head>
    <div>
      {getLayout(<Component { ...pageProps } />)}
    </div>
  </>

}


export default App;