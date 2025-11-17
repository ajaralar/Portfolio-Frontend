import { useLoaderData } from 'react-router-dom'
import classes from './TechResume.module.css'
import PIICard from '../../components/PIICard/PIICard'

const TechResume = () => {
    const data = useLoaderData()
    return (
        <div className={classes.resumeContainer}>
            <div className={classes.sectionOne}>
                <PIICard data={data}></PIICard>
                {/* <Card>
                    <div className={classes.skillsCard}>skillsCard</div>
                </Card> */}
            </div>

            {/* <div className={classes.sectionTwo}>
                <Card>
                    <div className={classes.careerCard}>careerCard</div>
                </Card>
            </div> */}
        </div>
    )
}

export default TechResume

