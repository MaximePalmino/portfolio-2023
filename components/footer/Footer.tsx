import styles from '../footer/Footer.module.scss'
import Bottom from './Bottom';
import Tagline from './Tagline';

const Footer: React.FC<any> = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.places}>
                    <h1>Get in<br></br> touch</h1>
                </div>
                <div className={styles.places}>
                    <h1>Lab</h1>
                </div>
                <div className={styles.places}>
                    <h1>Dev.to</h1>
                </div>
            </div>
            <Bottom />
            <Tagline />

        </>

    )
}

export default Footer;