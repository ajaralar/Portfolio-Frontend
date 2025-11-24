import classes from './ResumeCard.module.css'
import Card from "../Card/Card"

const ResumeCard = ({ data }) => {
    const education = data.education
    return (
        <Card>
            <div className={classes.mainContainer}>

                <div className={classes.collectionHeader}>
                    <div className={classes.iconContainer}>
                        {/* Icon here */}
                    </div>
                    <p className={classes.title}>Education</p>
                </div>

                <div className="itemCollection">
                    <div className="item">
                        <div className="timelineGraphic"></div>
                        <div className="content">
                            <p>School / University</p>
                            <p>Date</p>
                            <p>Body</p>
                        </div>
                    </div>
                </div>

            </div>
        </Card>
    )
}

export default ResumeCard