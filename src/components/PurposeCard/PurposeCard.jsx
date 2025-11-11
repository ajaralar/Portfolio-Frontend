import classes from './PurposeCard.module.css'

const PurposeCard = ({ title, icon, body }) => {
    return (
        <>
            <div className="icon">{icon}</div>
            <div className="title">{title}</div>
            <div className="body">{body}</div>
        </>
    )
}

export default PurposeCard