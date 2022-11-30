import styles from '../footer/Bottom.module.scss'

const Bottom: React.FC<any> = () => {

    return (
        <div className={styles.container}>
            <div className={styles.places}>
                <p>maximepalmino.pro@gmail.com</p>
            </div>
            <div className={styles.places}>
                <p>Experimental projects</p>

            </div>
            <div className={styles.places}>
                <p>lorem ipsum</p>
            </div>
        </div>
    )
}

export default Bottom;