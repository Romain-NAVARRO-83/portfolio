import 'fullpage.js/dist/fullpage.min.css';
import 'styles/globals.css';
import 'styles/gallery.css';
// import 'js/gallery.js';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;