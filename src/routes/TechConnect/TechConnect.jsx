import { useLoaderData } from 'react-router-dom'
const TechConnect = () => {
    const data = useLoaderData()
    return (
        <>
            <p>Hello from Connect page</p>
            <p>Status {data.message}</p>
        </>
    )
}

export default TechConnect
