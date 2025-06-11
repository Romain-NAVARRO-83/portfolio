import 'fullpage.js/dist/fullpage.min.css';
// import 'bulma/css/bulma.min.css';
import 'styles/nano.css';
import 'styles/globals.css';
import 'styles/gallery.css';
import 'styles/design.css';
// import 'js/gallery.js';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (<>

        <Component {...pageProps} />
    </>)
}

export default MyApp;