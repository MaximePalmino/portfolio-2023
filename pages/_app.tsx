import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

export default function App({ Component, pageProps }: AppProps) {
    const containerRef = useRef(null)


    return (

                <Component {...pageProps} />


    );
}
