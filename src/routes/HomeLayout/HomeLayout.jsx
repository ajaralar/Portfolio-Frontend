import { Link } from 'react-router-dom'
import classes from './HomeLayout.module.css'

const HomeLayout = () => {
    return (
        <main>
            <div className={classes.mainContainer}>
                <h1 className={classes.title}>CHOOSE A PORTFOLIO</h1>

                <div className={classes.portalGrid}>
                    <Link to="/tech" className={`${classes.card} ${classes.techCard}`}>
                        <div className={classes.overlay}>
                            <h2>Tech Portfolio</h2>
                            <p>Full-Stack Development & Cloud Architecture</p>
                        </div>
                    </Link>

                    <Link to="/music" className={`${classes.card} ${classes.musicCard}`}>
                        <div className={classes.overlay}>
                            <h2>Music Portfolio</h2>
                            <p>Production, Performance & Composition</p>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default HomeLayout