import { useLoaderData } from 'react-router-dom'

const TechResume = () => {
    const data = useLoaderData()
    return (
        <>
            <p>Hello from Resume page</p>
            <p>Status: {data.message} </p>
        </>
    )
}

export default TechResume
