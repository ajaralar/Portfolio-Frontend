import { useLoaderData } from 'react-router-dom'
import Section from '../../components/Section/Section'
import Project from '../../components/Project/Project'

const TechProjects = () => {
    const data = useLoaderData()
    return (
        <main>
            <Section
                title={data.sectionTitle}
                body={data.sectionBody}
                width={900} />

            {data.projects.map((projectData, index) => (
                <Project data={projectData} index={index} key={index} />
            ))}
        </main>
    )
}

export default TechProjects
