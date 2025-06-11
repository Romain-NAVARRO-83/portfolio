import React from 'react';

const Contact: React.FC = () => {
    return (
        <section>
            <div >
                <h2 className="title darkline">Contact</h2>
                <p className="subtitle darkline">Get in touch with Romain Navarro</p>
            </div>

            <div className="nano gap content">


                <div className="s12 m12 l6 pad">
                    <p className='lead'>If you have any questions or would like to discuss a project, feel free to reach out!</p>
                    <ul>
                        <li><a href="mailto:navarro.romain@gmail.com"><i className="fas fa-envelope-open-text"></i> navarro.romain@gmail.com</a></li>
                        <li><i className="fas fa-phone-alt"></i> +123 456 7890</li>
                        <li><i className="fab fa-github"></i> mongit</li>
                        <li><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/romainnavarro" target="_blank" rel="noopener noreferrer">linkedin.com/in/romainnavarro</a></li>
                    </ul>
                </div>
                <div className="s12 m12 l6">

                    <form action="/sendmail" method="POST">
                        <h3 className='subtitle'>Ecrivez-moi</h3>
                        <div className="field">
                            <label className="label">Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Your Name" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input className="input" type="email" placeholder="Your Email" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Message</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Your Message"></textarea>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button type="submit" className="button is-link">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='container'>
                Footer
            </div>
        </section>
    );
};

export default Contact;