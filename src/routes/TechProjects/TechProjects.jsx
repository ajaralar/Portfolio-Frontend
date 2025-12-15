import { useLoaderData } from 'react-router-dom'
import classes from './TechProjects.module.css'
import Section from '../../components/Section/Section'
import Project from '../../components/Project/Project'

const TechProjects = () => {
    const data = useLoaderData()
    return (
        <main>
            <Section
                title={data.sectionTitle}
                body={data.sectionBody} />

            <div className={classes.projectContainer}>
                {data.projects.map((projectData, index) => (
                    <Project data={projectData} index={index} key={index} />
                ))}
            </div>
        </main>
    )
}

export default TechProjects
