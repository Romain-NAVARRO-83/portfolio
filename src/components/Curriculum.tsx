import React from 'react';
import profileData from '../data/profile';
import Triangle from './triangle';

const Curriculum: React.FC = () => {
    return (
        <section>

            <div>
                <div className='darkline'>
                    <h2>Curriculum Vitae</h2>
                    <h3>Parcours Professionnel et Académique</h3>
                </div>
                <Triangle />
            </div>
            <div className="nano padh">
                <div className="s12 m6 l6">
                    <h4>Informations Personnelles</h4>
                    <ul>
                        <li><strong>Nom:</strong> {profileData.name}</li>
                        <li><strong>Email:</strong> {profileData.email}</li>
                        <li><strong>Téléphone:</strong> {profileData.phone}</li>
                        <li><strong>Adresse:</strong> {profileData.address}</li>
                    </ul>
                </div>
                <div className="s12 m6 l6">
                    <h4>Autre bloc</h4>
                </div>
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
                    <ul className='experiencelist'>
                        {profileData.experience.map((exp, index) => (
                            <li key={index}>
                                <strong>{exp.position}</strong> - {exp.company} ({exp.year})
                                <p>{exp.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>footer</div>

        </section>
    );
};

export default Curriculum;