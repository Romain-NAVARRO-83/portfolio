import React from 'react';
import Link from 'next/link';
import projectsData from '../data/projects';

const Portfolio: React.FC = () => {
    return (
        <section>
            <div className="container">
                <h2 className="title">Portfolio</h2>
                <div className="columns is-multiline">
                    {projectsData.map((project) => (
                        <div className="column is-one-third" key={project.id}>
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image">
                                        <img src={project.images[0]} alt={project.title} />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <h3 className="title is-4">{project.title}</h3>
                                    <h4 className="subtitle is-6">{project.subtitle}</h4>
                                    <p>{project.shortDescription}</p>
                                    <Link href={`/projects/${project.id}`} className="button is-link">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;