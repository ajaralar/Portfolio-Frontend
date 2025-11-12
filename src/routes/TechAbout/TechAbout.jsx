import { useLoaderData } from 'react-router-dom'
import classes from './TechAbout.module.css'
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import PurposeCard from '../../components/PurposeCard/PurposeCard';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';

const TechAbout = () => {
    const data = useLoaderData();
    const purpCards = data.purpCards
    const testCards = data.testCards

    return (
        <main>
            <Section
                title={data.aboutTitle}
                body={data.aboutBody}>
            </Section>

            <Section title={data.purpTitle}>
                <div className={classes.purpCardContainer}>
                    {purpCards?.map((card, index) => (
                        <Card key={index}>
                            <PurposeCard

                                title={card.title}
                                icon={card.icon}
                                body={card.description} />
                        </Card>
                    ))}
                </div>
            </Section>

            <Section title={data.testTitle}>
                <div className={classes.testCardContainer}>
                    {testCards.map((card, index) => (
                        <Card key={index}>
                            <TestimonialCard
                                name={card.name}
                                position={card.position}
                                body={card.body}
                            />
                        </Card>
                    ))}
                </div>
            </Section>
        </main>
    )
}

export default TechAbout
