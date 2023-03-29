import {useState, useEffect} from 'react'
import styles from './Nav.module.scss'
import useScrollDirection from '../../hooks/ScrollDirection'
import Link from "next/link";

const Nav = () => {
    const scrollDirection = useScrollDirection();

    return (
        <div className={`${styles.container} ${scrollDirection === "down" ? `${styles.hide}` : "show"}`}>
            <div>
                <Link href="#home"><p>👋 Hello!</p></Link>

            </div>
            <div>
                <Link href="#work"><p>✏️ Work</p></Link>
                <Link href="#about"><p>👱🏼‍ About</p></Link>
                <Link href="#contact"><p>♥️ Contact</p></Link>

            </div>
            <div>
                <a href="../cv.pdf" target="_blank" rel="noreferrer"><p>📑 Resume</p></a>
            </div>
        </div>
    )
}

export default Nav;