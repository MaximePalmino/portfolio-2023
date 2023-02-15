import { useState } from 'react';
import styles from '../cases/Cases.module.scss';
import { motion } from "framer-motion";
import Link from 'next/link'

import Apertio from '../../assets/images/apertio.jpg'
import Calceare from '../../assets/images/calceare.jpg'
import Waves from '../../assets/images/waves.jpg'
import Usermind2 from '../../assets/images/usermind2.jpg'
import Sudaerien from '../../assets/images/sudaerien.jpg'

import usermind from '../../assets/images/usermind.png'
import sud from '../../assets/images/telephones.png'

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

    const handleProjectHover = (project: Project) => {
        setSelectedProject(project);
    };

    const handleProjectLeave = () => {
        setSelectedProject(null);
    };

    const item = {
        hidden: { scale: 0.99, opacity: 1 },
        show: { scale: 1, opacity: 1 },
    };

    return (
        <div className={styles.container}>
            <div className={styles.places}>
                {selectedProject ? (
                    <motion.img
                        variants={item}
                        initial="hidden"
                        animate="show"
                        src={selectedProject.url}
                    />
                ) : (
                    <motion.h2 variants={item} initial="hidden" animate="show">
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
                    >
                        <p>{index + 1} /</p>
                        <h2>{project.name}</h2>
                        <p>{project.type}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cases;
