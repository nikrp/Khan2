import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const mailtoLink = `mailto:info@example.com?subject=Contact Form Submission from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name}%0AEmail: ${email}`;
        window.location.href = mailtoLink;
    };
    const navigate = useNavigate();

    return (
        
        
        
        <div>
        <div data-theme='light' className="h-screen flex justify-center flex-col items-center">
        <div class="fixed top-5 left-5 right-0">
        <button onClick={() => navigate('/dashboard', {replace: true})} className={`btn btn-success font-normal text-gray-500 text-lg `}>Home</button>
        </div>
        
            <h1 className="text-success text-5xl font-bold text-font-prose p-14 mb-2">Contact Us</h1>
            <div className={`w-2/6`}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="input input-bordered input-success w-full mb-4"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="input input-bordered input-success w-full mb-4"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className="input input-bordered input-success w-full p-2 mb-4 resize-none"
                        style={{ height: `${Math.max(80, formData.message.split('\n').length * 20)}px` }}
                    />
                    <button type="submit" className="btn btn-success w-full text-lg">Create Email</button>
                </form>
            </div>
            <p className="text-2xl font-thin text-sucess my-5">Email: ContactEduPulse@gmail.com</p>
            <p className="text-2xl font-thin text-sucess">Phone: 650-209-2828</p>
        </div>
        </div>
        
        

    );
}
