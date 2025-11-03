import { useLoaderData } from 'react-router-dom'

const TechAbout = () => {
    const data = useLoaderData();

    return (
        <>
            <p>Hello from About page</p>
            <p>Status: {data.message}</p>
        </>
    )
}

export default TechAbout
