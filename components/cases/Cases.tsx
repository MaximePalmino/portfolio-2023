import {useState} from 'react';
import styles from '../cases/Cases.module.scss';
import {motion, AnimatePresence} from "framer-motion";
import Link from 'next/link'

import Apertio from '../../assets/images/apertio.jpg'
import Wellyb from '../../assets/images/wellyb2.webp'
import Calceare from '../../assets/images/calceare.jpg'
import Waves from '../../assets/images/waves.jpg'
import Usermind2 from '../../assets/images/usermind2.jpg'
import Sudaerien from '../../assets/images/sudaerien.webp'

import usermind from '../../assets/images/usermind.png'
import sud from '../../assets/images/telephones.png'
import Modale from "./Modale";

interface Project {
    name: string,
    type: string,
    description: string,
    warning: string,
    url: string,
}

const projects: Project[] = [
    {
        name: 'Evomind',
        type: 'Fullstack Web Application | Plateforme SaaS',
        description: "I am excited to introduce you to SaaS platform that I had the pleasure of working on. Our platform is designed to make interviews easier than ever before, and it is built with the latest technologies such as Vue3, NodeJS, and TypeScript. I was involved in the development of the platform's features, which include advanced scheduling, video calls, real-timetranscriptions, and note taking. I collaborated with my team members from 40/60studio to ensure that the platform's interface is intuitive, user-friendly, and provides a seamless experience for both interviewers and candidates. Our platform is designed to streamline the interview process and save time and effort. I am proud to have contributed to this project, which can transform the way organizations conduct interviews.",
        warning: '⚠️ The name has been changed for security reasons | UI designed by 40/60studio',
        url: Usermind2.src,
    },
    {
        name: 'BoonBuggy',
        type: 'Front-end Mobile Application | iOS & Android',
        description: "The app is built with the latest technologies, including Vue3 and Ionic, and it offers a seamless user experience for all your accounting needs.\n" +
            "\n" +
            "Our team worked tirelessly to develop features that make accounting easier and more accessible, such as real-time data tracking, financial reporting, and invoice generation. We collaborated closely with accounting professionals to ensure that our app meets the highest industry standards and delivers value to its users.\n" +
            "\n" +
            "With its intuitive interface and user-friendly design, our app can help you manage your finances more efficiently, no matter where you are. As a developer on this project, I am proud to have contributed to its success and to have helped make accounting more accessible.",
        warning: '⚠️ The name and UI have been changed for security reasons | UI designed by Batuhan',
        url: Wellyb.src,
    },
    {
        name: 'PlaneYawl',
        type: 'Fullstack Web & Mobile Application',
        description: "Using cutting-edge technologies such as Nuxt and Flutter, we were able to create a powerful and user-friendly platform that meets the specific needs of syndicates. Our platform allows members to easily share information, stay informed about important updates, and collaborate more efficiently.\n" +
            "\n" +
            "As a developer on this project, I was involved in the design and implementation of key features, such as event scheduling, and document sharing. We worked closely with syndicate representatives to ensure that our platform met their unique requirements and delivered value to their members.",
        warning: '⚠️ The name and UI have have been changed for security reasons | UI from Tomasz Mazurczak',
        url: Sudaerien.src,
    },
    {
        name: 'Calceare',
        type: 'Fullstack e-commerce website',
        description: "A project I worked on during my studies at HETIC. A e-commerce platform for sneakers. Our team used Symfony to create a platform that provides a smooth and enjoyable shopping experience for sneaker enthusiasts.\n" +
            "\n" +
            "As a member of the development team, I was responsible for implementing various features of the platform, such as a user-friendly interface, advanced search capabilities, and secure payment processing. We worked collaboratively with our instructors to ensure that the project met our academic requirements and standards. I had the privilege of working with a talented team on this project. The team included Valentin Mariot, Lucas Huerta, Thomas Jeu, and Charles Mangin, each of whom brought their unique skills and expertise to the table.",
        warning: '',
        url: Calceare.src,
    },
    {
        name: 'Waves',
        type: 'Front-end player app',
        description: "I'm thrilled to share a project that I worked on - a dynamic web application that allows users to play music on a playlist of their choosing, using React.",
        warning: '',
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

    const handleModale = (project: Project, index: any) => {
        setIsModaleOpen(true)

        if (pointerEvent == 'initial') {
            setPointerEvent('none')
        } else {
            setPointerEvent('')
        }
    }

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

            <div className={styles.container} style={{pointerEvents: pointerEvent as any}}>
                <div className={styles.places}>
                    {selectedProject ? (
                        <motion.img src={selectedProject.url}
                        />) : (<motion.h2 initial={{opacity: 0, x: -15}}
                                          animate={{opacity: 1, x: 0}}
                                          transition={{duration: .4}}
                                          exit={{opacity: 0, x: 15}}>
                            5 Companies I Worked With </motion.h2>
                    )}
                </div>
                <div className={styles.container_places}>
                    {projects.map((project, index) => (
                        <div className={styles.flex}
                             key={index}
                             onMouseEnter={() => handleProjectHover(project)}
                             onMouseLeave={() => handleProjectLeave()}
                             onClick={() => handleModale(project, index)}>
                            <div>
                                <h2>{project.name}</h2>
                                <p>{project.type}</p>
                                <p>{project.warning}</p>
                            </div>
                            <div className={styles.arrow}> ></div>
                        </div>

                    ))}
                </div>
            </div>

        </>

    );
};

export default Cases;
