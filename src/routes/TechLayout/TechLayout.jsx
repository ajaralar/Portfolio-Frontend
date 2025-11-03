import { Outlet } from 'react-router-dom'
import TechHeader from "../../components/TechHeader/TechHeader"
import TechFooter from '../../components/TechFooter/TechFooter'

const TechLayout = () => {
    return (
        <>
            <TechHeader />
            <Outlet />
            <TechFooter />
        </>
    )
}

export default TechLayout