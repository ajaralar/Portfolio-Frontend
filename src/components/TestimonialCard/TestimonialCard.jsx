import classes from './TestimonialCard.module.css'

const TestimonialCard = ({ name, position, body }) => {
    return (
        <div className={classes.mainCont}>
            <div className={classes.titleContainer}>
                <div className={classes.image}>Meme</div>
                <div className={classes.name}>{name}</div>
            </div>

            <div className={classes.bodyContainer}>
                <div className={classes.body}>{body}</div>
                <div className={classes.readMore}>Read More</div>
            </div>
        </div>
    )
}

export default TestimonialCard