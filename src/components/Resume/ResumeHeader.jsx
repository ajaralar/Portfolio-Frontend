import { ResumeIconMap } from '../../utils/ResumeIconMap'
import classes from './Resume.module.css'

const ResumeHeader = ({ collection }) => {

    const Icon = ResumeIconMap[collection.icon]
    return (
        <div className={classes.collectionHeader}>
            <div className={classes.iconContainer}>
                <Icon />
            </div>

            <p className={classes.title}>{collection.collectionHeader}</p>
        </div>
    )
}

export default ResumeHeader