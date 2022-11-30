import styles from '../cases/Cases.module.scss';
import ribbleShot from '../../assets/DribbbleShot.png';

const Cases: React.FC<any> = () => {

    console.log(ribbleShot.src)
    return (

        <div className={styles.container}>
            <div className={styles.places}>
                <h2>Projects I enjoyed working on</h2>
            </div>
            <div className={styles.container_places}>
                <div className={styles.canada}>
                    <h2>Calceare</h2>
                    <p>/Canada</p>

                </div>
                <div className={styles.france}>
                    <h2>Usermind</h2>
                    <p>/France</p>
                </div>
                <div className={styles.spain}>
                    <h2>SudAerien</h2>
                    <p>/Spain</p>
                </div>

            </div>
        </div>
    )
}

export default Cases