import {Rainbow} from '../Rainbow.js';
import {Canvas} from '@react-three/fiber';
import {EffectComposer, Bloom} from '@react-three/postprocessing';
import {motion, useScroll, useTransform, MotionValue} from "framer-motion";
import {useRef} from "react";

const Modale = ({projet, setIsModaleOpen, setPointerEvent}: any) => {

    const handleCloseModale = () => {
        setIsModaleOpen(false)
        setPointerEvent('initial')
    }

    return (
        <div className='flex flex-col justify-center items-center relative'>

            {/*<img style={{width: '30%'}} src={projet.url} />*/}
            <h1 className='absolute top-14'>{projet.name}</h1>
            <p className='w-6/12 mt-14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
            <button onClick={() => handleCloseModale()} className="p-2 mt-10 bg-blue-600 rounded-lg text-white">Close modale
            </button>
        </div>
    )
}
export default Modale

const Scene = () => {
    const rainbow = useRef<any>(null);

    return <Rainbow ref={rainbow} startRadius={0} endRadius={5.5} fade={0}/>;
};

