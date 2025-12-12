import { useLoaderData } from 'react-router-dom'
import ConnectForm from '../../components/ConnectForm/ConnectForm'
import classes from './TechConnect.module.css'

const TechConnect = () => {
    const data = useLoaderData()

    return (
        <main>
            <div className={classes.mainContainer}>
                <p className={classes.title}>CONNECT WITH ME</p>
                <ConnectForm />
            </div>
        </main>
    )
}

export default TechConnect
