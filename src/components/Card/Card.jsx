import classes from './Card.module.css'

const Card = ({ index = null, children, fullSize, size }) => {

    const alignmentClass = index % 2 !== 0 ? classes.alignRight : classes.alignLeft
    const fullSizeClass = fullSize ? classes.fullSize : ''
    const sizeClass = {
        'width': `${size}%`
    }

    return (
        <div className={`${classes.card} ${alignmentClass} ${fullSizeClass}`} style={sizeClass}>
            {children}
        </div>
    )
}

export default Card