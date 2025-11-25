import classes from './index.module.css'
import ItemContent from './ItemContent'

const ResumeItem = ({ collection }) => {
    return (
        <div className={classes.itemCollection}>
            {collection.items.map((item, index) => (
                <div key={index} className={classes.item}>
                    {collection.collectionHeader !== 'Certifications' ? (
                        <div className={classes.timelineGraphic}>
                            <div className={classes.ellipse}></div>
                            <div className={classes.line}></div>
                        </div>
                    ) : ''}

                    <div className={classes.content}>
                        <ItemContent item={item} header={collection.collectionHeader} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ResumeItem