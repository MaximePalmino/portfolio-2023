import styles from '../cases/Projects.module.scss';


const Projects = () => {

    return (
        <a className={styles.link} href="https://github.com/MaximePalmino" target="_blank" rel="noreferrer" >
        <div className={styles.url}>
            <h2>👈 | Have a look on github to explore my public repositories | 👉</h2>
        </div>
        </a>

    )
}

export default Projects;