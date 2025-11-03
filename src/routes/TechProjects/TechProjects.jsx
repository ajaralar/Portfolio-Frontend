import { useLoaderData } from 'react-router-dom'

const TechProjects = () => {
    const data = useLoaderData()
    return (
        <>
            <p>Hello from Projects page</p>
            <p>Status: {data.message}</p>
        </>
    )
}

export default TechProjects
