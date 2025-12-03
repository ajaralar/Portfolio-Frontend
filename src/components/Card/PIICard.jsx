import classes from './PIICard.module.css'
import Card from './Card'
import TypedTextAnimation from '../TypedTextAnimation/TypedTextAnimation'

const PIICard = ({ data }) => {
    return (
        <Card fullSize={true}>
            <div className={classes.piiCard}>
                <div className={classes.pii}>
                    <div className={classes.image}>
                        {/* <img src="" alt="" /> */}
                    </div>
                    <p>{data.name}</p>
                    <TypedTextAnimation strings={data.work} />
                </div>

                <div className={classes.list}>
                    <p>State:</p>
                    <p>{data.state}</p>
                </div>

                <div className={classes.list}>
                    <p>City:</p>
                    <p>{data.city}</p>
                </div>

                <div className={classes.list}>
                    <p>Age:</p>
                    <p>{data.age}</p>
                </div>

            </div>
        </Card>
    )
}


export default PIICard