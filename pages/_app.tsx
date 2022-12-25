import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Nav from "../components/navigation/Nav"
import React from 'react';


export default function App({ Component, pageProps }: AppProps) {
    const containerRef = useRef(null)


    return (
        <>
            <Nav />
            <Component {...pageProps} />
        </>

    );
}
