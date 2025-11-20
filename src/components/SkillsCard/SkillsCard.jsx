import classes from './SkillsCard.module.css'
import Card from '../Card/Card'
import ProgressBar from '../ProgressBar/ProgressBar'
import IconCarousel from '../IconCarousel/IconCarousel'

const SkillsCard = ({ data }) => {
    return (
        <Card fullSize={true}>
            <div className={classes.mainContainer}>
                {data.skills.map((item, index) => (
                    <ProgressBar
                        key={index}
                        name={item.name}
                        progress={item.progress} />
                ))}

                <IconCarousel icons={data.techs} />
            </div>
        </Card>
    )
}

export default SkillsCard