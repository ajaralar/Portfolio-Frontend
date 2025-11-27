import classes from './Project.module.css'
import ProjectHeader from './ProjectHeader';
import ProjectDetails from './ProjectDetails';

const Project = ({ data, index }) => {
    const layoutClass = index % 2 ? classes.staggered : ''

    return (
        <div className={`${classes.mainContainer} ${layoutClass}`}>

            <div className={classes.computer}>
                Computer
            </div>

            <div className={classes.code}>
                <ProjectHeader data={data} />
                <ProjectDetails data={data} />
            </div>

        </div>
    )
}

export default Project