import { Outlet, useLoaderData } from 'react-router-dom'
import { useState } from 'react'
import TechHeader from "../../components/TechHeader/TechHeader"
import TechFooter from '../../components/TechFooter/TechFooter'
import MenuAnimation from '../../components/MenuAnimation/MenuAnimation'
import HamburgerIcon from "../../components/Icons/HamburgerIcon/HamburgerIcon.jsx"
import CloseIcon from '../../components/Icons/CloseIcon/CloseIcon.jsx'
import IconContainer from '../../components/Icons/IconContainer/IconContainer.jsx'

const TechLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const footerData = useLoaderData()

    const handleToggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    }

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    }

    return (
        <>
            <MenuAnimation
                menuState={isMenuOpen}
                onClose={handleMenuClose} />

            <TechHeader />

            <IconContainer isVisible={!isMenuOpen} onClickHandler={handleToggleMenu}>
                <HamburgerIcon />
            </IconContainer>

            <IconContainer isVisible={isMenuOpen} onClickHandler={handleToggleMenu}>
                <CloseIcon />
            </IconContainer>

            <Outlet />

            <TechFooter footerData={footerData} />
        </>
    )
}

export default TechLayout