import { useLoaderData } from "react-router-dom"
import classes from './TechHome.module.css'
import TypedTextAnimation from '../../components/TypedTextAnimation/TypedTextAnimation'

const TechHome = () => {
    const data = useLoaderData()
    return (
        <main>
            <div className={classes.content}>
                <div className={classes.image}>
                    <img src={data.imageSrc} alt="" />
                </div>
                <p>Hi, I'm AJ</p>

                <div className={classes.subtitleContainer}>
                    <p>I am a</p>
                    <TypedTextAnimation
                        strings={data.roles}
                        className={classes.roles} />
                </div>

                <p className={classes.body}>{data.body}</p>

                <a href="tech/about" className={classes.button}>More about me</a>
            </div>
        </main>
    )
}

export default TechHome