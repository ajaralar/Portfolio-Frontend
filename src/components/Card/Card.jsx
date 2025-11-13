import classes from './Card.module.css'

const Card = ({ index = null, children }) => {

    const alignmentClass = index % 2 !== 0 ? classes.alignRight : classes.alignLeft

    return (
        <div className={`${classes.card} ${alignmentClass}`}>
            {children}
        </div>
    )
}

export default Card