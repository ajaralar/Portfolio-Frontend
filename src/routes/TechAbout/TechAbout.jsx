import { useLoaderData } from 'react-router-dom'
import classes from './TechAbout.module.css'
import PurposeCard from '../../components/PurposeCard/PurposeCard';

const TechAbout = () => {
    const data = useLoaderData();
    const cards = data.purpCards

    return (
        <>
            <main>
                <section className={classes.section}>
                    <h1 className={classes.title}>{data.title1}</h1>
                    <p className={classes.body}>{data.body1}</p>
                    <br />
                    <p className={classes.body}>{data.body2}</p>
                    <br />
                    <p className={classes.body}>{data.body3}</p>
                </section>

                <section className={classes.section}>
                    <h1 className={classes.title}>{data.title2}</h1>
                    <div className="cardContainer">
                        {cards.map((card, index) => (
                            <PurposeCard
                                key={index}
                                title={card.title}
                                icon={card.icon}
                                body={card.description}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export default TechAbout
