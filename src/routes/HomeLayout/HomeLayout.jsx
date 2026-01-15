import { Link, useLoaderData } from 'react-router-dom'
import classes from './HomeLayout.module.css'

const HomeLayout = () => {
    const data = useLoaderData()

    return (
        <main>
            <div className={classes.mainContainer}>
                <h1 className={classes.title}>CHOOSE A PORTFOLIO</h1>

                <div className={classes.portalGrid}>
                    {data.portfolios.map((portfolio, index) => {
                        const url = portfolio.url
                        return (
                            <Link
                                to={url}
                                key={index}
                                className={`${classes.card} ${classes.techCard}`}>

                                <div className={classes.overlay}>
                                    <h2>{portfolio.title} Portfolio</h2>
                                    <p>{portfolio.subtitle}</p>
                                </div>

                            </Link>
                        )
                    })}
                </div>
            </div>
        </main >
    )
}

export default HomeLayout