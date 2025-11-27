import classes from './Project.module.css'

const ProjectHeader = ({ data }) => {
    return (
        <>
            <div className={classes.projectHeader}>
                <div className={classes.macGUI}>
                    <div className={classes.ellipse}></div>
                    <div className={classes.ellipse}></div>
                    <div className={classes.ellipse}></div>
                </div>

                <div className={classes.projectTitle}>{data.title}</div>



            </div>
            <div className={classes.line}></div>
        </>
    )
}

export default ProjectHeader