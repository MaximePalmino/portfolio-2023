import {Rainbow} from '../Rainbow.js';
import {Canvas} from '@react-three/fiber';
import {EffectComposer, Bloom} from '@react-three/postprocessing';
import {motion, useScroll, useTransform, MotionValue} from "framer-motion";
import {useRef} from "react";
import styles from '../cases/Modale.module.scss';

const Modale = ({projet, setIsModaleOpen, setPointerEvent}: any) => {

    const handleCloseModale = () => {
        setIsModaleOpen(false)
        setPointerEvent('initial')
    }

    return (
        <div className={styles.container}>
            <div>
                {/*<img style={{width: '30%'}} src={projet.url} />*/}
                <h1>{projet.name}</h1>
                <p >{projet.description}</p>
                <p >I would be happy to discuss the project in more detail during an
                    interview.</p>
                    <button onClick={() => handleCloseModale()}>👈 <span>Back</span></button>
            </div>

        </div>
    )
}
export default Modale

