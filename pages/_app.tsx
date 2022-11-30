import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

export default function App({ Component, pageProps }: AppProps) {
    const containerRef = useRef(null)


    return (
        // <LocomotiveScrollProvider
        //     options={
        //         {
        //             smooth: true,
        //             // smoothClass: 'has-scroll-smooth',
        //             // offset: ["100%", 10]
        //             // ... all available Locomotive Scroll instance options 
        //         }
        //     }
        //     watch={
        //         [
        //             //..all the dependencies you want to watch to update the scroll.
        //             //  Basicaly, you would want to watch page/location changes
        //             //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        //         ]
        //     }
        //     containerRef={containerRef}>
        <main ref={containerRef} data-scroll-container>
            <Component {...pageProps} />
        </main>
        // {/* </LocomotiveScrollProvider > */ }

    );
}
