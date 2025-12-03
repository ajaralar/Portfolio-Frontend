import { useLoaderData } from 'react-router-dom'
import classes from './TechResume.module.css'
import PIICard from '../../components/Card/PIICard'
import SkillsCard from '../../components/Card/SkillsCard'
import ResumeCard from '../../components/Card/ResumeCard'

const TechResume = () => {
    const data = useLoaderData()
    return (
        <div className={classes.resumeContainer}>
            <div className={classes.sectionOne}>
                <PIICard data={data} />
                <SkillsCard data={data} />
            </div>

            <div className={classes.sectionTwo}>
                <ResumeCard data={data} />
            </div>
        </div>
    )
}

export default TechResume