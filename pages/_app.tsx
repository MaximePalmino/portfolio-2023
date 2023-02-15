import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Nav from "../components/navigation/Nav"
import React from 'react';


export default function App({ Component, pageProps }: AppProps) {

    return (
        <>
            <Nav />
            <Component {...pageProps} />
        </>

    );
}
