import classes from './Resume.module.css'

const BulletList = ({ items }) => {
    return (
        <ul className={classes.bullet}>
            {items.map((bullet, index) => (
                <li key={index}>{bullet}</li>
            ))}
        </ul>
    )
}

export default BulletList