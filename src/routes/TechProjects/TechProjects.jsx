import { useLoaderData } from 'react-router-dom'
import Section from '../../components/Section/Section'
import Project from '../../components/Project/Project'

const TechProjects = () => {
    const data = useLoaderData()
    return (
        <>
            <Section
                title={data.sectionTitle}
                body={data.sectionBody}
                width={710} />

            {data.projects.map((projectData, index) => (
                <Project data={projectData} index={index} key={index} />
            ))}
        </>
    )
}

export default TechProjects
