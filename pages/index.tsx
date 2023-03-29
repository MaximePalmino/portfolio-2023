import Header from '../components/header/Header'
import Tools from '../components/tools/Tools'
import Cases from '../components/cases/Cases'
import Footer from '../components/footer/Footer'
import About from '../components/about/About'
import Projects from '../components/cases/Projects'
import { motion} from 'framer-motion';

const Home = () => {

    return (
        <>
            <motion.div>

                <Header/>
                <Tools/>
                <Cases/>
                <Projects/>
                <About/>
                <Footer/>


            </motion.div>
        </>
    )
}

export default Home




