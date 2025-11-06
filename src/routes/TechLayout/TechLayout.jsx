import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import TechHeader from "../../components/TechHeader/TechHeader"
import TechFooter from '../../components/TechFooter/TechFooter'
import MenuAnimation from '../../components/MenuAnimation/MenuAnimation'
import HamburgerIcon from "../../components/Icons/HamburgerIcon/HamburgerIcon.jsx"
import CloseIcon from '../../components/Icons/CloseIcon/CloseIcon.jsx'
import IconContainer from '../../components/Icons/IconContainer/IconContainer.jsx'

const TechLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onToggleHandler = () => {
        setIsMenuOpen(prev => !prev);
    }

    const isHamIconVisible = !isMenuOpen;
    const isClsIconVisible = isMenuOpen;

    return (
        <>
            <MenuAnimation menuState={isMenuOpen} />

            <TechHeader />

            <IconContainer isVisible={isHamIconVisible} onClickHandler={onToggleHandler}>
                <HamburgerIcon />
            </IconContainer>

            <IconContainer isVisible={isClsIconVisible} onClickHandler={onToggleHandler}>
                <CloseIcon />
            </IconContainer>

            <Outlet />

            <TechFooter />
        </>
    )
}

export default TechLayout