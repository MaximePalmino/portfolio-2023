import {useState} from 'react';
import styles from '../cases/Cases.module.scss';
import {motion, AnimatePresence} from "framer-motion";
import Link from 'next/link'

import Apertio from '../../assets/images/apertio.jpg'
import Calceare from '../../assets/images/calceare.jpg'
import Waves from '../../assets/images/waves.jpg'
import Usermind2 from '../../assets/images/usermind2.jpg'
import Sudaerien from '../../assets/images/sudaerien.jpg'

import usermind from '../../assets/images/usermind.png'
import sud from '../../assets/images/telephones.png'
import Modale from "./Modale";

interface Project {
    name: string,
    type: string,
    url: string,
}

const projects: Project[] = [
    {
        name: 'Usermind',
        type: 'Fullstack Web Application',
        url: Usermind2.src,
    },
    {
        name: 'Sud Aerien',
        type: 'Fullstack Web & Mobile Application',
        url: Sudaerien.src,
    },
    {
        name: 'Apertio',
        type: 'Fullstack',
        url: Apertio.src,
    },
    {
        name: 'Calceare',
        type: 'Fullstack',
        url: Calceare.src,
    },
    {
        name: 'Waves',
        type: 'Branding',
        url: Waves.src,
    },
];

const Cases: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [clickSelectedProject, setClickSelectedProject] = useState<Project | null>(null);
    const [isModaleOpen, setIsModaleOpen] = useState<boolean>(false)
    const [pointerEvent, setPointerEvent] = useState<string>('initial')


    const handleProjectHover = (project: Project) => {
        setSelectedProject(project);
        setClickSelectedProject(project)
    };

    const handleProjectLeave = () => {
        setSelectedProject(null);
    };

    const handleModale = (project: Project) => {
        setIsModaleOpen(!isModaleOpen)
        setClickSelectedProject(project);
        if (pointerEvent == 'initial') {
            setPointerEvent('none')
        } else {
            setPointerEvent('')
        }
    }

    const item = {
        hidden: {scale: 0.99, opacity: 1},
        show: {scale: 1, opacity: 1},
    };


    return (
        <>
            <AnimatePresence>

                {clickSelectedProject && (
                    isModaleOpen && (
                        <motion.div className={styles.modale}
                                    initial={{opacity: 0, x: -15}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{duration: .4}}
                                    exit={{opacity: 0, x: 15}}>
                            <Modale projet={clickSelectedProject} setIsModaleOpen={setIsModaleOpen}
                                    setPointerEvent={setPointerEvent}/>
                        </motion.div>
                    )
                )}
            </AnimatePresence>

                <div className={styles.container} style={{pointerEvents: pointerEvent}}>
                    <div className={styles.places}>
                        {selectedProject ? (
                            <motion.img

                                src={selectedProject.url}
                            />
                        ) : (
                            <motion.h2 initial={{opacity: 0, x: -15}}
                                       animate={{opacity: 1, x: 0}}
                                       transition={{duration: .4}}
                                       exit={{opacity: 0, x: 15}}>
                                5 Companies I Worked With
                            </motion.h2>
                        )}

                    </div>
                    <div className={styles.container_places}>
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => handleProjectHover(project)}
                                onMouseLeave={() => handleProjectLeave()}
                                onClick={() => handleModale(project)}>
                                <p>{index + 1} /</p>
                                <h2>{project.name}</h2>
                                <p>{project.type}</p>
                            </div>
                        ))}
                    </div>
                </div>

        </>

    );
};

export default Cases;
