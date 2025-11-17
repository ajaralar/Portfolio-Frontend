import { useLoaderData } from 'react-router-dom'
import classes from './TechResume.module.css'
import Card from '../../components/Card/Card'

const TechResume = () => {
    const data = useLoaderData()
    return (
        <div className={classes.resumeContainer}>
            <div className={classes.sectionOne}>
                <Card>
                    <div className={classes.piiCard}>
                        <div className={classes.pii}>
                            <div className={classes.image}>
                                {/* <img src="" alt="" /> */}
                            </div>
                            <p>JOSE RICKY, ARALAR</p>
                            <p>Software Developer</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className={classes.skillsCard}>skillsCard</div>
                </Card>
            </div>

            <div className={classes.sectionTwo}>
                <Card>
                    <div className={classes.careerCard}>careerCard</div>
                </Card>
            </div>
        </div>
    )
}

export default TechResume

