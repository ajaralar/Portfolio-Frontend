import classes from './IconCarousel.module.css'
import { TechIconMap } from '../../utils/TechIconMap'

const IconCarousel = ({ icons }) => {

    const RenderIcons = () => {
        return icons.map((item, index) => {
            const Icon = TechIconMap[item.icon]

            return (
                <div key={index} className={classes.container}>
                    <Icon />
                </div>
            )
        })
    }

    return (
        <div className={classes.carousel}>
            <div className={classes.group}>
                <RenderIcons />
                <RenderIcons />
            </div>
        </div>
    )
}

export default IconCarousel