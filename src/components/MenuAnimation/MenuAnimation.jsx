import classes from './MenuAnimation.module.css'

const MenuAnimation = ({ menuState }) => {
    const menuClasses = `${classes.mainContainer} ${menuState ? classes.visible : ''}`

    return (
        <div className={menuClasses}>
            <div className={classes.ellipseOne}></div>
        </div>
    )
}

export default MenuAnimation;