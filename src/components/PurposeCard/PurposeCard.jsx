import classes from './PurposeCard.module.css'
import { IconMap } from '../../utils/IconMap';

const PurposeCard = ({ title, icon, body }) => {

    const DynamicIcon = IconMap[icon]

    if (!DynamicIcon) {
        console.error(`Icon component not found for key: ${icon}`);
        return null;
    }

    return (
        <div className={classes.card}>
            <div className={classes.icon}>
                <DynamicIcon></DynamicIcon>
            </div>
            <div className={classes.container}>
                <div className={classes.title}>{title}</div>
                <div className={classes.body}>{body}</div>
            </div>
        </div>
    )
}

export default PurposeCard