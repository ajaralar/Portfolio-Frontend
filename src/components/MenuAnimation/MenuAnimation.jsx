import Menu from '../Menu/Menu'
import classes from './MenuAnimation.module.css'

const MenuAnimation = ({ menuState, onClose }) => {
    const menuClasses = `${classes.mainContainer} ${menuState ? classes.visible : ''}`

    return (
        <div className={menuClasses}>
            <div className={classes.ellipseOne}></div>
            <div className={classes.ellipseTwo}></div>
            <div className={classes.ellipseThree}></div>
            <div className={classes.ellipseFour}></div>
            <Menu isVisible={menuState} onClose={onClose}></Menu>
        </div>
    )
}

export default MenuAnimation;