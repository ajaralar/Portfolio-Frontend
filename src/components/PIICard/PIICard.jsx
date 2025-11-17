import classes from './PIICard.module.css'
import Card from '../Card/Card'
import TypedTextAnimation from '../TypedTextAnimation/TypedTextAnimation'

const PIICard = ({ data }) => {
    return (
        <Card>
            <div className={classes.piiCard}>
                <div className={classes.pii}>
                    <div className={classes.image}>
                        {/* <img src="" alt="" /> */}
                    </div>
                    <p>{data.name}</p>
                    <TypedTextAnimation strings={data.work} />
                </div>
            </div>
        </Card>
    )
}


export default PIICard