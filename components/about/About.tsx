import styles from "../about/About.module.scss"

const About: React.FC<any> = () => {

    return (
        <>
            <div className={styles.container} id="about">
                <h1>En recherche d'alternance pour septembre/octobre 2023</h1>
                <a href="../cv.pdf" target="_blank" rel="noreferrer"><p>✋ My resume ✋</p></a>
            </div>
        </>
    )
}

export default About;


