import { useState } from 'react'
import styles from './Nav.module.scss'

const Nav = () => {

    return (
        <div className={styles.container}>

            <div>

                <p>デベロッパー 😁</p>
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