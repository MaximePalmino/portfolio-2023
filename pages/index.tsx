import Header from '../components/header/Header'
import { useRef, useState, useEffect } from "react"
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import Tools from "../components/tools/Tools"
import Cases from "../components/cases/Cases"
import Places from "../components/about/Places"
import Footer from "../components/footer/Footer"
import About from "../components/about/About"

const Home = () => {
    const { scroll } = useLocomotiveScroll()

    return (
        <div>
            <div >
                {/* <div className="bg"></div> */}
                <Header />
                <Tools />
                <Cases />
                <About />
                <Places />
                <Footer />
            </div>
        </div>
    )
}

export default Home