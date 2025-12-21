import classes from './PIICard.module.css'
import Card from './Card'
import TypedTextAnimation from '../TypedTextAnimation/TypedTextAnimation'
import { useEffect, useState } from 'react';

const PIICard = ({ data }) => {
    const [cardSize, setCardSize] = useState(100)

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth

            if (width < 750) {
                setCardSize(100)
            } else if (width < 1200) {
                setCardSize(35)
            } else {
                setCardSize(100)
            }
        };

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <Card size={cardSize}>
            <div className={classes.piiCard}>
                <div className={classes.pii}>
                    <div className={classes.image}>
                        {/* <img src="" alt="" /> */}
                    </div>
                    <div className={classes.container}>
                        <p>{data.name}</p>
                        <TypedTextAnimation strings={data.work} />
                    </div>
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