import classes from './ProgressBar.module.css'

const ProgressBar = ({ name, progress }) => {
    const progressStyle = {
        width: `${progress}%`
    }

    return (
        <div className={classes.mainContainer}>
            <div className={classes.head}>
                <p>{name}:</p>
                <p>{progress}%</p>
            </div>

            <div className={classes.bar}>
                <div className={classes.progress} style={progressStyle}></div>
            </div>
        </div>
    )
}

export default ProgressBar