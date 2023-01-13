import styles from './Header.module.scss'
import { useRef } from 'react'
import { Rainbow } from '../Rainbow.js'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";


function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}
const Header: React.FC<any> = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, -100);

    return (

        <div className={styles.container} >
            <div className={styles.displacement} ref={ref}>
                <div className={styles.name} >
                    <p>Front-end web developer with typescript fullstack experience</p>
                    <h1>Maxime Palmino</h1>
                </div>
            </div>
            {/*<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="1100">*/}
            {/*    <g fill="none"*/}
            {/*       stroke="#FFF" strokeWidth="2" strokeDasharray="4" opacity="0.4">*/}
            {/*        <circle cx="565" cy="565" r="300" id='myPath'/>*/}
            {/*        <animateTransform attributeName="transform"*/}
            {/*                          type="rotate"*/}
            {/*                          from="360 565 565"*/}
            {/*                          to="0 565 565"*/}
            {/*                          dur="120.9s"*/}
            {/*                          repeatCount="indefinite"/>*/}
            {/*    </g>*/}
            {/*    <text>*/}
            {/*        <textPath href="#MyPath">Quick brown fox jumps over the lazy dog.</textPath>*/}
            {/*    </text>*/}
            {/*</svg>*/}
            <motion.div style={{y,width: 700, height: 350, borderRadius: '0%', filter: 'blur(0px)', marginTop: '2em', position:'absolute' }}>
             <Canvas orthographic gl={{ antialias: false }} style={{}}>
                        <color attach="background" args={['#000000']} />
                        <Scene />
                        <EffectComposer disableNormalPass>
                            <Bloom mipmapBlur levels={10} intensity={1.5} luminanceThreshold={2} luminanceSmoothing={1} />
                        </EffectComposer>
                    </Canvas>
            </motion.div>
            </div>
    )
}
export default Header;


const Scene = () => {
    const rainbow = useRef<any>(null)

    // const [isPrismHit, hitPrism] = useState(false)

    // useFrame((state) => {

    //     // Animate rainbow intensity
    //     lerp(rainbow.current.material, 'emissiveIntensity', isPrismHit ? 5.5 : 1.5, 0.5)

    // })


    return (
        <Rainbow ref={rainbow} startRadius={0} endRadius={5.5} fade={0} />
    )
}
