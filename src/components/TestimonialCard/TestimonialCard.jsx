import { useState, useRef, useLayoutEffect } from 'react'
import classes from './TestimonialCard.module.css'

const TestimonialCard = ({ name, position, body, imageSrc, index = null }) => {
    const [isReading, setIsReading] = useState(false)
    const contentRef = useRef(null)
    const [contentHeight, setContentHeight] = useState(0)

    const readMoreText = isReading ? 'Read Less' : 'Read More'
    const alignmentClass = index % 2 !== 0 ? classes.alignRight : classes.alignLeft

    const handleReadMore = () => {
        setIsReading(prevIsReading => !prevIsReading)
    }

    const containerStyle = {
        'height': isReading ? contentHeight + 40 : '90px',
    }

    useLayoutEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight)
        }
    }, [body])

    return (
        <div className={`${classes.mainCont} ${alignmentClass}`} onClick={handleReadMore}>
            <div className={classes.titleContainer}>
                <div className={classes.image}>
                    <img src={imageSrc} alt={`Photo of ${name}`} />
                </div>
                <div className={classes.name}>{name}</div>
            </div>

            <div className={classes.bodyContainer} style={containerStyle}>
                <div ref={contentRef} className={classes.bodyContent}>
                    <div className={classes.body}>{body}</div>
                    <div className={classes.readMore} >
                        {readMoreText}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard