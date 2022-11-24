import styles from '../tools/Tools.module.scss'
import Next from '../../assets/logos/nextjs_logo.png'
import Github from '../../assets/logos/github-logo.svg'
import Reactsvg from '../../assets/logos/react-logo-vector.svg'
import Nuxt from '../../assets/logos/nuxt-logo.svg'
import Firebase from '../../assets/logos/firebase-logo.webp'
import Notion from '../../assets/logos/notion-logo.png'

const Tools: React.FC<any> = () => {

    const nextImg = Next.src
    const reactImg = Github.src
    // const reactSvg = Reactsvg.src
    const nuxtImg = Nuxt.src
    const firebaseImg = Firebase.src
    const notionImg = Notion.src

    return (
        <div className={styles.container}>
            <div data-scroll data-scroll-speed="1">
                <h2>Tools I like to work with</h2>
            </div>
            <div className={styles.tools_wrapper}>
                <div className={styles.react} data-scroll data-scroll-speed="1">
                    <img src={reactImg} alt='next' />
                </div>
                <div data-scroll data-scroll-speed="1">
                    <img src={nuxtImg} alt='next' />
                </div>
                <div data-scroll data-scroll-speed="1">
                    <img src={nextImg} alt='next' />
                </div>
                <div data-scroll data-scroll-speed="1">
                    <img src={firebaseImg} alt='next' />
                </div>
                <div data-scroll data-scroll-speed="1">
                    <img src={notionImg} alt='next' />
                </div>
            </div>
            <div data-scroll data-scroll-speed="1">
                {/* <hr></hr> */}

            </div>

        </div >
    )


}

export default Tools