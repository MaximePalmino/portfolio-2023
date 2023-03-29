import styles from '../footer/Tagline.module.scss';
import { motion } from 'framer-motion';

const Tagline: React.FC<any> = () => {
    const textVariants = {
        animate: {
            x: [0, -1500],
            transition: {
                repeat: Infinity,
                duration: 25,
                ease: 'linear',
            },
        },
    };

    return (
        <div className={styles.container}>
            <motion.h2 variants={textVariants} animate="animate">
                If you have any further questions, please feel free to reach me at anytime at +33 7 67 88 45 02.  If you have any further questions, please feel free to reach me at anytime at +33 7 67 88 45 02.
            </motion.h2>
        </div>
    );
};

export default Tagline;
