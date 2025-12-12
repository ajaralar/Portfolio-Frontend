import { useState } from "react"
import classes from './ConnectForm.module.css'

const BACK_DOMAIN = import.meta.env.VITE_BACK_DOMAIN;

const ConnectForm = () => {
    // Declaration
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState({ message: null, type: null })
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        subject: '',
        message: ''
    })

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

        setStatus({ message: null, type: null });
    }

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        setStatus({ message: 'Sending message...', type: null });

        try {
            const response = await fetch(`${BACK_DOMAIN}/tech/connect/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json();

            // If Backend validation pass and email sent
            if (response.ok) {
                setStatus({
                    message: data.message || 'Success! Your message has been sent',
                    type: 'success'
                })
                setFormData({ fname: '', lname: '', email: '', subject: '', message: '' })
            }
            // If Backend validation error (from express-validator)
            else if (response.status === 400) {
                const validationErrors = data.errors.map(err => err.msg).join('; ')
                setStatus({
                    message: `Validation Error(s): ${validationErrors}`,
                    type: 'error'
                })
            }
            // If 500 server error (e.g., email not sent, logical error, etc.)
            else {
                setStatus({
                    message: data.message || 'An unexpected error occurred. Please try again later.',
                    type: 'error'
                })
            }

        } catch (error) {
            console.error('Submission Error:', error)
            setStatus({ message: 'Network error. Please check your connection.', type: 'error' })
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className={classes.connectForm}>
            {status.message && (
                <p className={status.type === 'success' ? classes.success : classes.error}>
                    {status.message}
                </p>
            )}
            <div className={classes.nameGroup}>
                <div>
                    <label htmlFor="fname">First Name:</label>
                    <input
                        type="text"
                        name="fname"
                        placeholder="e.g, Alexander"
                        value={formData.fname}
                        onChange={handleChange}
                        required
                        id="fname" />
                </div>

                <div>
                    <label htmlFor="lname">Last Name:</label>
                    <input
                        type="text"
                        name="lname"
                        placeholder="e.g, DeGreat"
                        value={formData.lname}
                        onChange={handleChange}
                        required
                        id="lname" />
                </div>
            </div>

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                placeholder="e.g, alexander_degreat@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                id="email" />

            <label htmlFor="subject">Subject:</label>
            <input
                type="text"
                name="subject"
                placeholder="What is your message about?"
                value={formData.subject}
                onChange={handleChange}
                required
                id="subject" />

            <label htmlFor="message">Message:</label>
            <textarea
                name="message"
                placeholder="Enter your message here"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
                id="message" />

            <div className={classes.buttonGroup}>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <button disabled={isSubmitting}>
                    Clear
                </button>
            </div>

        </form>
    )
}

export default ConnectForm