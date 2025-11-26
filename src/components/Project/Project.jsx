import classes from './Project.module.css'

const Project = ({ data, index }) => {
    const braceStringStart = '{';
    const braceStringEnd = '}';
    const bracketStringStart = '[';
    const bracketStringEnd = ']';
    const layoutClass = index % 2 ? classes.staggered : ''

    return (
        <div className={`${classes.mainContainer} ${layoutClass}`}>

            <div className={classes.computer}>
                Computer
            </div>

            <div className={classes.code}>
                <div className={classes.projectHeader}>
                    <div className={classes.macGUI}>
                        <div className={classes.ellipse}></div>
                        <div className={classes.ellipse}></div>
                        <div className={classes.ellipse}></div>
                    </div>

                    <div className={classes.projectTitle}>{data.title}</div>
                </div>

                <div className={classes.line}></div>

                <div className={classes.codeContainer}>
                    <p>
                        <span className={classes.pink}>const </span>
                        project
                        <span className={classes.pink}> = </span>
                        {braceStringStart}
                    </p>

                    <div className={classes.container}>
                        <p>name: '{data.shortTitle}'</p>
                        <p>tools:
                            {bracketStringStart}
                            {data.tools.map((item, index) => (
                                `'${item}'`
                            ))}
                            {bracketStringEnd}
                        </p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Project