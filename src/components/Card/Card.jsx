import classes from './Card.module.css'

const Card = ({ index = null, children, fullSize }) => {

    const alignmentClass = index % 2 !== 0 ? classes.alignRight : classes.alignLeft
    const sizeClass = fullSize ? classes.fullSize : ''

    return (
        <div className={`${classes.card} ${alignmentClass} ${sizeClass}`}>
            {children}
        </div>
    )
}

export default Card