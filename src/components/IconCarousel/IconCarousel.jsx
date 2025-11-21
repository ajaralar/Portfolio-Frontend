import classes from './IconCarousel.module.css'
import { TechIconMap } from '../../utils/TechIconMap'

const IconCarousel = ({ icons }) => {

    const RenderIcons = () => {
        return icons.map((item, index) => {
            const Icon = TechIconMap[item.icon]

            return (
                <Icon key={index}></Icon>
            )
        })
    }

    return (
        <div className={classes.carousel}>
            <div className={classes.group}>
                <RenderIcons />
                <RenderIcons />
                <RenderIcons />
            </div>
        </div>
    )
}

export default IconCarousel