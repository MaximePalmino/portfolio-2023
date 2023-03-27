import styles from './Header.module.scss';
import {useRef} from 'react';
import {Rainbow} from '../Rainbow.js';
import {Canvas} from '@react-three/fiber';
import {EffectComposer, Bloom} from '@react-three/postprocessing';
import {motion, useScroll, useTransform, MotionValue} from "framer-motion";
import {useCallback, useState, ref} from "react";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const Header: React.FC<any> = () => {


    const {scrollYProgress} = useScroll({target: ref});
    const y = useParallax(scrollYProgress, -60);

    return (
        <div className={styles.container}>
            <div className={styles.displacement} ref={ref}>
                <div className={styles.name}>
                    <p>Fullstack web developer</p>
                    <h1>Maxime Palmino</h1>
                </div>
            </div>

            <motion.div
                style={{
                    width: 600,
                    height: 460,
                    filter: 'blur(0px)',
                    marginTop: '2em',
                    position: 'absolute',

                }}
            >
                <Canvas orthographic gl={{antialias: false}} style={{
                    borderRadius: '50% 50% 0% 0%', border: '1px solid rgba(255, 255, 255, 0.35)'
                }}>
                    <color attach="background" args={['#000000']}/>
                    <Scene/>
                    <EffectComposer disableNormalPass>
                        <Bloom mipmapBlur levels={10} intensity={1.5} luminanceThreshold={2} luminanceSmoothing={1}/>
                    </EffectComposer>
                </Canvas>
            </motion.div>
        </div>
    );
};

const Scene = () => {
    const rainbow = useRef<any>(null);
    const ref = useRef(null);

    return (<>
        <Rainbow ref={rainbow} startRadius={0} endRadius={5.5} fade={0}/>;
    </>);
};

export default Header;

