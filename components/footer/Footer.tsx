import styles from '../footer/Footer.module.scss'
import Bottom from './Bottom';
import Tagline from './Tagline';
import {useState} from "react";

const Footer: React.FC<any> = () => {
    const [email, setEmail] = useState('maximepalmino.pro@gmail.com')
    const copylink = () => {
        navigator.clipboard.writeText('maximepalmino.pro@gmail.com')
        setEmail('Copied to clipboard ! ♥️')
    }
    return (
        <>
            <div className={styles.container} id="contact">
                <div className={styles.places}>
                    <h1>📍Paris</h1>
                </div>
                <div className={styles.places} onClick={copylink}>
                    <p>Click me</p>
                    <h3>{email}</h3>
                </div>
                <div className={styles.places}>
                    <h1>🇨🇦️ Mtl lover</h1>

                </div>
            </div>
            <Bottom/>
            <Tagline/>
        </>

    )
}

export default Footer;