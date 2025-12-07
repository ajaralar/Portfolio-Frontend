import { useLoaderData } from 'react-router-dom'
import ConnectForm from '../../components/ConnectForm/ConnectForm'
import classes from './TechConnect.module.css'

const TechConnect = () => {
    const data = useLoaderData()

    return (
        <main>
            <div className={classes.formSection}>
                <ConnectForm></ConnectForm>
            </div>
        </main>
    )
}

export default TechConnect
