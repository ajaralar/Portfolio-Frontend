import { Link } from 'react-router-dom'
import classes from './Menu.module.css'

const Menu = ({ isVisible, onClose }) => {
    const navItems = [
        { to: '/tech', label: 'Home' },
        { to: '/tech/about', label: 'About' },
        { to: '/tech/resume', label: 'Resume' },
        { to: '/tech/connect', label: 'Connect' },
        { to: '/tech/projects', label: 'Projects' }
    ];

    const menuClass = `${classes.menuContainer} ${isVisible ? classes.visible : ''}`
    return (
        <nav className={menuClass}>
            {navItems.map((item, index) => (
                <Link
                    key={item.to}
                    to={item.to}
                    style={{ '--index': index }}
                    className={classes.menuLink}
                    onClick={onClose}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    )
}

export default Menu