import styles from '../footer/Bottom.module.scss'

const Bottom: React.FC<any> = () => {

    return (
        <div className={styles.container}>
            <div className={styles.places}>
            </div>
            <div className={styles.places}>
                <p>© 2023 Maxime Palmino. All Rights Reserved.</p>
            </div>
            <div className={styles.places}>
            </div>
        </div>
    )
}

export default Bottom;