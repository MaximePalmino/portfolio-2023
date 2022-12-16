import styles from './Header.module.scss'
import { useRef } from 'react'
import { Rainbow } from '../Rainbow.js'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

const Header: React.FC<any> = () => {


    // 

    return (

        <div className={styles.container}>
            <div className={styles.displacement}>
                <div className={styles.name}>
                    <p>Welcome to my digital portfolio!</p>
                    <h1><span>👋</span> Maxime Palmino</h1>
                </div>

                <div className={styles.canvas}>
                    {/* <Canvas orthographic gl={{ antialias: false }} style={{ width: 450, height: 450, borderRadius: '50%', filter: 'blur(1.2px)', marginTop: '2em' }}>
                        <color attach="background" args={['#060606']} />
                        <Scene />
                        <EffectComposer disableNormalPass>
                            <Bloom mipmapBlur levels={10} intensity={1.5} luminanceThreshold={2} luminanceSmoothing={1} />
                        </EffectComposer>
                    </Canvas>
                    <Canvas orthographic gl={{ antialias: false }} style={{ position: 'absolute', width: 450, height: 450, borderRadius: '50%', filter: 'blur(20px)', marginTop: '2em', top: 0, zIndex: -1 }}>
                        <color attach="background" args={['#060606']} />
                        <Scene />
                        <EffectComposer disableNormalPass>
                            <Bloom mipmapBlur levels={0} intensity={0.5} luminanceThreshold={1} luminanceSmoothing={1} />
                        </EffectComposer>
                    </Canvas> */}
                </div>
            </div>
            {/* <Canvas orthographic gl={{ antialias: true }} camera={{ position: [0, 0, 100], zoom: 70 }} style={{ width: 300, height: 300, borderRadius: '50%', position: 'absolute', transform: 'rotate(180deg)', boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px", opacity: '.8' }}>
                <color attach="background" args={['black']} />
                <Scene />
                <EffectComposer disableNormalPass>
                    <Bloom mipmapBlur levels={10} intensity={20} luminanceThreshold={2} luminanceSmoothing={1} />
                </EffectComposer>
            </Canvas> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="1100" height="1100">
                <g fill="none"
                    stroke="#10100E" strokeWidth="2" strokeDasharray="4" opacity="0.4">
                    <circle cx="565" cy="565" r="300" id='myPath' />
                    <animateTransform attributeName="transform"
                        type="rotate"
                        from="360 565 565"
                        to="0 565 565"
                        dur="120.9s"
                        repeatCount="indefinite" />
                </g>
                <text>
                    <textPath href="#MyPath">Quick brown fox jumps over the lazy dog.</textPath>
                </text>
            </svg >

        </div >
    )
}

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
export default Header;