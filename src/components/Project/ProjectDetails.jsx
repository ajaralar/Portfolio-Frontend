import classes from './Project.module.css'

const QuotedString = ({ value }) => {
    return (
        <>
            <span className={classes.gray}>'</span>
            <span className={classes.orange}>{value}</span>
            <span className={classes.gray}>'</span>
        </>
    );
};

const ProjectDetails = ({ data }) => {
    const braceStringStart = '{';
    const braceStringEnd = '}';
    const bracketStringStart = '[';
    const bracketStringEnd = ']';

    return (
        <div className={classes.codeContainer}>
            <p>
                <span className={classes.pink}>const </span>project
                <span className={classes.pink}> = </span>{braceStringStart}
            </p>

            <div className={classes.container}>
                <p>name: <QuotedString value={data.shortTitle} /></p>

                <p>
                    tools: <span className={classes.gray}>{bracketStringStart}</span>
                    {data.tools.map(item => (
                        <QuotedString key={item} value={item} />
                    )).reduce((prev, curr) => [prev, ', ', curr])}
                    <span className={classes.gray}>{bracketStringEnd}</span>
                </p>

                <p>myRole: <QuotedString value={data.myRole} /></p>
                <p>description: <QuotedString value={data.description} /></p>
            </div>

            <p>{braceStringEnd};</p>

        </div>
    )
}

export default ProjectDetails