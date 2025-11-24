import classes from './ResumeCard.module.css'
import { ResumeIconMap } from '../../utils/ResumeIconMap'
import Card from "../Card/Card"

const ResumeCard = ({ data }) => {
    return (
        <Card>
            <div className={classes.mainContainer}>
                {data.collections.map((collection, index) => {
                    const Icon = ResumeIconMap[collection.icon]

                    return (
                        <>
                            <div key={index} className={classes.collectionHeader}>
                                <div className={classes.iconContainer}>
                                    <Icon />
                                </div>

                                <p className={classes.title}>{collection.collectionHeader}</p>
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
                        </>

                    )
                })}



            </div>
        </Card>
    )
}

export default ResumeCard