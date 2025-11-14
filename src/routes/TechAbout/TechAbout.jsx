import { useLoaderData } from 'react-router-dom'
import classes from './TechAbout.module.css'
import Section from '../../components/Section/Section';
import Card from '../../components/Card/Card';
import PurposeCard from '../../components/PurposeCard/PurposeCard';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';

const TechAbout = () => {
    const aboutData = useLoaderData();
    const purpCards = aboutData.purpCards
    const testCards = aboutData.testCards

    return (
        <main>
            <Section
                title={aboutData.aboutTitle}
                body={aboutData.aboutBody}>
            </Section>

            <Section title={aboutData.purpTitle}>
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

            <Section title={aboutData.testTitle}>
                <div className={classes.testCardContainer}>
                    {testCards.map((card, index) => {
                        return (
                            <Card index={index} key={index}>
                                <TestimonialCard
                                    name={card.name}
                                    position={card.position}
                                    body={card.body}
                                    imageSrc={card.imageSrc}
                                    index={index}
                                />
                            </Card>
                        )
                    })}
                </div>
            </Section>
        </main>
    )
}

export default TechAbout
