import React from 'react';

const Contact: React.FC = () => {
    return (
        <section>
            <div className="container">
                <h2 className="title">Contact</h2>
                <p className="subtitle">Get in touch with Romain Navarro</p>
                <div className="content">
                    <p>If you have any questions or would like to discuss a project, feel free to reach out!</p>
                    <ul>
                        <li>Email: romain.navarro@example.com</li>
                        <li>Phone: +123 456 7890</li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/romainnavarro" target="_blank" rel="noopener noreferrer">linkedin.com/in/romainnavarro</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Contact;