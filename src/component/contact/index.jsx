import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './index.css';  // Optional CSS for styling

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSent, setIsSent] = useState(false);  // To show a success message after submission

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            email: '',
            message: ''
        });
        alert("message sent")

        const { name, email, message } = formData;

        // Check if all fields are filled
        if (name && email && message) {
            emailjs.sendForm(
                'your_service_id',    // Service ID from EmailJS
                'your_template_id',   // Template ID from EmailJS
                e.target,
                'your_user_id'        // User ID from EmailJS
            )
                .then((result) => {
                    console.log(result.text);
                    setIsSent(true);
                    setFormData({
                        name: '',
                        email: '',
                        message: ''
                    });
                }, (error) => {
                    console.log(error.text);
                    setIsSent(false);
                });
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className="contact-form">
            <h4 style={{ textAlign: "center" }}>Contact Me</h4>
            {isSent && <p className="success-message">Your message has been sent!</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-outline-success" style={{ color: "white" }}>Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;
