import classes from './ResumeCard.module.css'
import ResumeItem from '../Resume/ResumeItem'
import ResumeHeader from '../Resume/ResumeHeader'
import Card from "./Card"

const ResumeCard = ({ data }) => {
    return (
        <Card fullSize={true}>
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