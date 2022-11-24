import Nav from "../components/navigation/Nav"
import Header from '../components/header/Header'
import { useRef, useState } from "react"
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import Tools from "../components/tools/Tools"
import Cases from "../components/cases/Cases"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

const Home = () => {
    const { scroll } = useLocomotiveScroll()
    const containerRef = useRef(null)


    return (
        <LocomotiveScrollProvider
            options={
                {
                    smooth: true,
                    // ... all available Locomotive Scroll instance options 
                }
            }
            watch={
                [
                    //..all the dependencies you want to watch to update the scroll.
                    //  Basicaly, you would want to watch page/location changes
                    //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
                ]
            }
            containerRef={containerRef}>
            <main style={{ position: "fixed" }} ref={containerRef} data-scroll-container>
                <div data-scroll-section>
                    <Nav />

                </div>
                <div data-scroll-section>
                    <Header />

                </div>
                <div data-scroll-section>
                    <Tools />

                </div>
                <div data-scroll-section>
                    <Cases />

                </div>



            </main>
        </LocomotiveScrollProvider >

    )
}

export default Home