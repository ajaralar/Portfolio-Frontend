import { useLoaderData } from 'react-router-dom'
import ConnectForm from '../../components/ConnectForm/ConnectForm'

const TechConnect = () => {
    const data = useLoaderData()

    return (
        <>
            <ConnectForm></ConnectForm>
        </>
    )
}

export default TechConnect
