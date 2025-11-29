import classes from './Project.module.css'

const ProjectView = () => {
    return (
        <div className={classes.mockupContainer}>
            <div className={classes.monitorFrame}>
                <div className={classes.monitorScreen}>
                    {/* <ProjectDisplay/> */}
                </div>
            </div>

            {/* <div className={classes.monitorStand}>
                <div className={classes.standNeck}></div>
                <div className={classes.standBase}></div>
            </div> */}
        </div>
    )
}

export default ProjectView