import styles from './Header.module.scss'

const Header: React.FC<any> = () => {

    return (

        <div className={styles.container}>
            <div className={styles.displacement}>
                <div className={styles.name}>
                    <p>Welcome to my digital portfolio!</p>
                    <h1><span>👋</span> Maxime Palmino</h1>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1100" height="1100">
                <g fill="none"
                   stroke="#10100E" strokeWidth="2" strokeDasharray="4" opacity="0.4">
                    <circle cx="565" cy="565" r="300" id='myPath'/>
                    <animateTransform attributeName="transform"
                                      type="rotate"
                                      from="360 565 565"
                                      to="0 565 565"
                                      dur="120.9s"
                                      repeatCount="indefinite"/>
                </g>
                <text>
                    <textPath href="#MyPath">Quick brown fox jumps over the lazy dog.</textPath>
                </text>
            </svg>
        </div>
    )
}
export default Header;