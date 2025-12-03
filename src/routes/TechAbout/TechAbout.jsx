import { useLoaderData } from 'react-router-dom'
import classes from './TechAbout.module.css'
import Section from '../../components/Section/Section';
import PurposeCard from '../../components/Card/PurposeCard';
import TestimonialCard from '../../components/Card/TestimonialCard';

const TechAbout = () => {
    const {
        aboutTitle,
        aboutBody,
        purpTitle,
        purpCards,
        testTitle,
        testCards
    } = useLoaderData()

    return (
        <main>
            {/* About me section */}
            <Section title={aboutTitle} body={aboutBody} />

            {/* Purpose Section */}
            <Section title={purpTitle}>
                <div className={classes.purpCardContainer}>
                    {purpCards?.map((card, index) => (
                        <PurposeCard
                            key={index}
                            title={card.title}
                            icon={card.icon}
                            body={card.description} />
                    ))}
                </div>
            </Section>

            {/* Testiomonial Section */}
            <Section title={testTitle}>
                <div className={classes.testCardContainer}>
                    {testCards.map((card, index) => (
                        <TestimonialCard
                            key={index}
                            index={index}
                            name={card.name}
                            position={card.position}
                            body={card.body}
                            imageSrc={card.imageSrc}
                        />
                    ))}
                </div>
            </Section>
        </main>
    )
}

export default TechAbout
