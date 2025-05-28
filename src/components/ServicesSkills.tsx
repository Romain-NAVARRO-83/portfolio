import React from 'react';
import profileData from '../data/profile';

const ServicesSkills: React.FC = () => {
    return (
        <section >
            <div className="container">
                <h2 className="title">Services & Skills</h2>
                <div className="columns">
                    {profileData.skills.map((skill, index) => (
                        <div className="column is-one-third" key={index}>
                            <div className="box">
                                <h3 className="subtitle">{skill.name}</h3>
                                <p>{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSkills;