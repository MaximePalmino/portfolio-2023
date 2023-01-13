import { useState, useEffect } from 'react'
import styles from './Nav.module.scss'
import useScrollDirection from '../../hooks/ScrollDirection'

const Nav = () => {
    const scrollDirection = useScrollDirection();

    return (
        <div className={`${styles.container} ${scrollDirection === "down" ? `${styles.hide}` : "show"}`}>
            <div>
                <p>👋</p>

            </div>
            <div>

                <p>Cases</p>
                <p>About</p>
                <p>Contact</p>

            </div>
            <div>
                <p>Blog</p>
            </div>
        </div>
    )
}

export default Nav;