import classes from './Section.module.css'

const Section = ({ children, title, body }) => {

    return (
        <div className={classes.section}>
            <h1 className={classes.title}>{title}</h1>
            {body?.map((item, index) => (
                <p
                    className={classes.body}
                    key={index}>
                    {item}
                </p>
            ))}
            {children}
        </div>
    )
}

export default Section