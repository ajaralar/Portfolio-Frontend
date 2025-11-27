import classes from './Resume.module.css'
import ResumeItem from './ResumeItem'
import ResumeHeader from './ResumeHeader'
import Card from "../Card/Card"

const ResumeCard = ({ data }) => {
    return (
        <Card>
            <div className={classes.mainContainer}>
                {data.collections.map((collection, index) => {
                    return (
                        <div key={index} className={classes.section}>
                            <ResumeHeader collection={collection} />
                            <ResumeItem collection={collection} />
                        </div>
                    )
                })}
            </div>
        </Card>
    )
}

export default ResumeCard