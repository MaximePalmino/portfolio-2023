import styles from '../about/Places.module.scss'

const About: React.FC<any> = () => {

    return (
        <>
            <div className={styles.container}>

                <div className={styles.places}>
                    <h2>Places I've worked in</h2>
                </div>
                <div className={styles.container_places}>
                    <div className={styles.canada}>
                        <h2>Montreal</h2>
                        <p>/Canada</p>
                    </div>
                    <div className={styles.france}>
                        <h2>Paris</h2>
                        <p>/France</p>
                    </div>
                    <div className={styles.spain}>
                        <h2>Mallorca</h2>
                        <p>/Spain</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default About;