import styles from '../cases/Cases.module.scss'

const Cases: React.FC<any> = () => {

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1>left</h1>
            </div>
            <div className={styles.middle}>
                <h1>mid1</h1>
            </div>
            <div className={styles.middleBottom}>
                <h1>mid2</h1>
            </div>
            <div className={styles.right} >
                <h1>right1</h1>
            </div>
            <div className={styles.rightBottom}>
                <h1>right2</h1>
            </div>
        </div>
    )
}

export default Cases