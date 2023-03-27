import styles from "../about/About.module.scss"
import {Canvas} from "@react-three/fiber";
import {Bloom, EffectComposer} from "@react-three/postprocessing";
import {useRef} from "react";
import {Rainbow} from "../Rainbow";

const About: React.FC<any> = () => {


    return (
        <>
            <div className={styles.container}>
                <h1>En recherche d'alternance pour septembre/octobre 2023</h1>
                <p>✋ My resume ✋</p>
            </div>
        </>
    )
}

export default About;


