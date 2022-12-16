import { useState, useEffect } from 'react'
import styles from './Nav.module.scss'
import useScrollDirection from '../../hooks/ScrollDirection'

const Nav = () => {
    const scrollDirection = useScrollDirection();

    return (
        <div className={`${styles.container} ${scrollDirection === "down" ? `${styles.hide}` : "show"}`}>
            <div>
                <p>デベ 😁</p>
            </div>
            <div>
                <p>Cases</p>
                <p>Lab</p>
                <p>Blog</p>
            </div>
            <div>
                <p>About</p>
            </div>
        </div>
    )
}

export default Nav;