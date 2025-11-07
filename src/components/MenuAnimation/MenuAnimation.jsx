import classes from './MenuAnimation.module.css'

const MenuAnimation = ({ menuState }) => {
    const menuClasses = `${classes.mainContainer} ${menuState ? classes.visible : ''}`

    return (
        <div className={menuClasses}>
            <div className={classes.ellipseOne}></div>
            <div className={classes.ellipseTwo}></div>
            <div className={classes.ellipseThree}></div>
            <div className={classes.ellipseFour}></div>
        </div>
    )
}

export default MenuAnimation;