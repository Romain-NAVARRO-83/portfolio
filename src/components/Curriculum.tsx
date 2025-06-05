import React from 'react';
import profileData from '../data/profile';

const Curriculum: React.FC = () => {
    return (
        <section>

            <h2>Curriculum Vitae</h2>
            <h3>Parcours Professionnel et Académique</h3>
            <div className="nano">
                <div className="s12 m6 l6">
                    <h4>Formation</h4>
                    <ul>
                        {profileData.education.map((edu, index) => (
                            <li key={index}>
                                <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="s12 m6 l6">
                    <h4>Expérience Professionnelle</h4>
                    <ul>
                        {profileData.experience.map((exp, index) => (
                            <li key={index}>
                                <strong>{exp.position}</strong> - {exp.company} ({exp.year})
                                <p>{exp.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </section>
    );
};

export default Curriculum;