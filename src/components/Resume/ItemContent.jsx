import classes from './Resume.module.css'
import BulletList from './BulletList'

const ItemContent = ({ item, header }) => {
    if (header === 'Education') {
        return (
            <>
                <p className={classes.detailPrimary}>{item.university} - {item.location}</p>
                <p className={classes.detailSecondary}>{item.date}</p>
                <BulletList items={item.bullet} />
            </>
        )
    }

    if (header === 'Experience') {
        return (
            <>
                <p className={classes.detailPrimary}>{item.role} @ {item.company} - {item.location}</p>
                <p className={classes.detailSecondary}>{item.date}</p>
                <BulletList items={item.bullet} />
            </>
        )
    }

    if (header === 'Courses and Training') {
        return (
            <>
                <p className={classes.detailPrimary}>{item.title}</p>
                <p className={classes.detailPrimary}>Issued By: <span className={classes.detailSecondary}>{item.issuedBy}</span></p>
                <p className={classes.detailPrimary}>Issued On: <span className={classes.detailSecondary}>{item.issuedOn}</span></p>
                <p className={classes.learning}>{item.learning}</p>
                <a className={classes.detailSecondary} href={item.url}>View my Certificate</a>
            </>
        )
    }

    if (header === 'Certifications') {
        return (
            <div className={classes.certification}>
                <img src={item.imgSrc} alt="AWS Badge" />
                <div className={classes.certificationDetails}>
                    <p className={classes.detailPrimary}>{item.title}</p>
                    <p className={classes.detailPrimary}>Issued By: <span className={classes.detailSecondary}>{item.issuedBy}</span></p>
                    <p className={classes.detailPrimary}>Issued On: <span className={classes.detailSecondary}>{item.issuedOn}</span></p>
                    <a className={classes.detailSecondary} href={item.url}>View my Certificate</a>
                </div>
            </div>
        )
    }
}

export default ItemContent