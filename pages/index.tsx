import Nav from "../components/navigation/Nav"
import Header from '../components/header/Header'
import { useRef, useState } from "react"
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import Tools from "../components/tools/Tools"
import Cases from "../components/cases/Cases"

const Home = () => {
    const { scroll } = useLocomotiveScroll()


    return (
        <div data-scroll-section>
            <Nav />
            <Header />
            <Tools />
            <Cases />
        </div>



    )
}

export default Home