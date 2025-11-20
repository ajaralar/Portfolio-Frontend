import classes from './IconContainer.module.css'

const IconContainer = ({ children, isVisible, onClickHandler }) => {
    const visibleClass = `${classes.iconContainer} ${isVisible ? classes.visible : ''}`
    return (
        <div className={visibleClass} onClick={onClickHandler}>
            {children}
        </div>
    )
}

export default IconContainer