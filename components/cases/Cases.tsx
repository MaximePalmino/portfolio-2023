import { useState } from 'react';
import styles from '../cases/Cases.module.scss';
import CoolSimple from '../../assets/images/cool-simple.png'
import Quarante from '../../assets/images/40-60.png'
import Amoseeds from '../../assets/images/amoseeds.jpg'

import usermind from '../../assets/images/usermind.png'
import sud from '../../assets/images/telephones.png'
import Link from 'next/link'


interface Project {
    name: string,
    type: string
}

const Cases: React.FC<any> = () => {


    const projects = [
        {
            name: '40/60 Studio',
            type: 'fullstack',
            url: Quarante.src,

        },
        {
            name: 'Cool&Simple',
            type: 'fullstack',
            url: CoolSimple.src,

        },
        {
            name: 'Gastronomia Aliments Fins',
            type: 'fullstack',
            url: sud.src,

        },
        {
            name: 'Calceare',
            type: 'fullstack',
            url: 'https://images.unsplash.com/photo-1670140271803-c6dc20497ac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',

        },
        {
            name: 'Amoseeds',
            type: 'Branding',
            url: Amoseeds.src

        },
    ]



    const [isTrue, setIsTrue] = useState<boolean>(false)
    const [test, setTest] = useState<string>('')

    const logKey = (index: number) => {

        projects.map((image: any, key: number) => {
            if (key === index) {
                setIsTrue(true)
                setTest(image.url)
            }
        })
    }

    const logLeave = () => {
        setIsTrue(false)
    }

    return (

        <div className={styles.container}>
            <div className={styles.places}>
                {isTrue ? <img src={test} /> : <h2>5 Companies I worked with</h2>}
            </div>
            <div className={styles.container_places}>
                {projects.map((project: Project, index: number) => (
                    <Link href={`/projects/${project.name.toLocaleLowerCase()}`} key={index} onMouseEnter={() => logKey(index)} onMouseLeave={() => logLeave()}>
                        <p>{index + 1} /</p>
                        <h2>{project.name}</h2>
                        <p>{project.type}</p>
                    </Link>
                ))
                }
            </div >
        </div >
    )
}

export default Cases


