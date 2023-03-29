import styles from './Header.module.scss';
import {useRef} from 'react';
import {Rainbow} from '../Rainbow.js';
import {Canvas} from '@react-three/fiber';
import {EffectComposer, Bloom} from '@react-three/postprocessing';

const Header: React.FC<any> = () => {
    return (
        <div className={styles.container} id="home">
            <div className={styles.displacement}>
                <div className={styles.name}>
                    <p>Fullstack web developer</p>
                    <h1>Maxime Palmino</h1>
                </div>
            </div>

            <div className={styles.canvasWrapper}>
                <Canvas
                    orthographic
                    gl={{antialias: false}}
                    className={styles.canvas}
                >
                    <color attach="background" args={['#000000']}/>
                    <Scene/>
                    <EffectComposer disableNormalPass>
                        <Bloom
                            mipmapBlur
                            levels={10}
                            intensity={1.5}
                            luminanceThreshold={2}
                            luminanceSmoothing={1}
                        />
                    </EffectComposer>
                </Canvas>
            </div>
        </div>
    );
};

const Scene = () => {
    const rainbow = useRef<any>(null);

    return (
        <>
            <Rainbow ref={rainbow}   />
        </>
    );
};

export default Header;
