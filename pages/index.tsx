import Nav from "../components/navigation/Nav"
import Header from '../components/header/Header'
import { useRef, useState } from "react"
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
            <div className="bg">        </div>
            <Nav />
            <Header />
            <Tools />

            <Cases />
            <About />
            <Places />
            <Footer />
        </div>
    )
}

export default Home