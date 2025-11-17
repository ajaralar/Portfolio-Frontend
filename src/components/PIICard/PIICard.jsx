import classes from './PIICard.module.css'
import Card from '../Card/Card'
import { useEffect, useMemo, useState } from 'react'

const PIICard = ({ data }) => {
    const words = useMemo(() => data.work || [], [data.work])

    const [isTyping, setIsTyping] = useState(true)
    const [currentText, setCurrentText] = useState('')
    const [wordIndex, setWordIndex] = useState(0)

    const TYPING_SPEED = 90
    const DELETING_SPEED = 30
    const PAUSE_TIME = 1000

    useEffect(() => {
        if (words.length === 0) return

        const currentWord = words[wordIndex % words.length]

        let timeoutDelay = isTyping ? TYPING_SPEED : DELETING_SPEED

        const isWordFinishedTyping = isTyping && currentText === currentWord
        const isWordFinishedDeleting = !isTyping && currentText === ''

        if (isWordFinishedTyping) {
            timeoutDelay = PAUSE_TIME
        } else if (isWordFinishedDeleting) {
            timeoutDelay = 500
        }

        const timer = setTimeout(() => {
            if (isWordFinishedTyping) {
                setIsTyping(false)
                return
            }

            if (isWordFinishedDeleting) {
                setIsTyping(true)
                setWordIndex(i => i + 1)
                return
            }

            setCurrentText(prev => {
                if (isTyping) {
                    return currentWord.substring(0, prev.length + 1)
                } else {
                    return currentWord.substring(0, prev.length - 1)
                }
            })
        }, timeoutDelay)

        return () => clearTimeout(timer)
    }, [words, currentText, isTyping, wordIndex])

    return (
        <Card>
            <div className={classes.piiCard}>
                <div className={classes.pii}>
                    <div className={classes.image}>
                        {/* <img src="" alt="" /> */}
                    </div>
                    <p>{data.name}</p>
                    <div className={classes.typedText}>
                        <p>{currentText}</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}


export default PIICard