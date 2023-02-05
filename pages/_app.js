import Head from 'next/head';
import { AppContextProvider } from '../context/app-context';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Loopstudios</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        />
        <link rel="icon" href="./favicon.png" />
      </Head>

      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
}

export default MyApp;
