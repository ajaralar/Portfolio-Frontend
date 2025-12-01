import classes from './Project.module.css'

const ProjectView = ({ data }) => {
    return (
        <div className={classes.mockupContainer}>
            <div className={classes.monitorFrame}>
                <img src={data.imageSrc} alt={data.title} />
            </div>

            {/* <div className={classes.monitorStand}>
                <div className={classes.standNeck}></div>
                <div className={classes.standBase}></div>
            </div> */}
        </div>
    )
}

export default ProjectView