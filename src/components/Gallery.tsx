import React, { useState } from 'react';
import projectsData from '../data/projects';
import Link from 'next/link';
import Triangle from './triangle';

// Génère la liste des technologies uniques pour les filtres
const getUniqueTechs = () => {
    const allTechs = projectsData.flatMap(p => p.techStack || []);
    return ['all', ...Array.from(new Set(allTechs))];
};

const filters = getUniqueTechs().map(tech => ({
    label: tech.charAt(0).toUpperCase() + tech.slice(1),
    value: tech,
}));

const Gallery: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [openOverlay, setOpenOverlay] = useState<number | null>(null);

    const filteredProjects = activeFilter === 'all'
        ? projectsData
        : projectsData.filter(project => (project.techStack || []).includes(activeFilter));

    return (
        <>
            <div>
                <h2 className='darkline'>Projets</h2>
                <div className="responsive-container-block optionsContainer darkline">
                    {filters.map((filter, idx) => (
                        <button
                            key={filter.value}
                            className={`text-blk list${activeFilter === filter.value ? ' active' : ''}`}
                            data-filter={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
                <Triangle />

            </div>
            <div className="desktop_7" unique-script-id="w-w-dm-id">



                <div className="responsive-container-block bigContainer">

                    <div className="responsive-container-block Container">



                        <div id="gallery" className="responsive-container-block imageContainer">
                            {filteredProjects.map((project, idx) => (
                                <div className="project" key={project.id} style={{ backgroundImage: `url(${project.images[0]})` }}>
                                    {/* <img
                                    className="squareImg"
                                    src={project.images[0]}
                                    alt={project.title}
                                /> */}
                                    {/* Overlay */}
                                    <h3 className="project-title subtitle">{project.title}</h3>
                                    <>
                                        {openOverlay === idx && (
                                            <div className="overlay">
                                                <div className="overlay-inner">
                                                    <button className="close" onClick={() => setOpenOverlay(null)}>
                                                        Close X
                                                    </button>
                                                    <div className="hdImgs">
                                                        <img className="againImg" src={project.images[0]} alt={project.title} />
                                                    </div>
                                                    <div className="project-details">
                                                        <h3>{project.title}</h3>
                                                        <h4>{project.subtitle}</h4>
                                                        <p>{project.shortDescription}</p>
                                                        <div>
                                                            <strong>Stack :</strong> {project.techStack?.join(', ')}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                    <div className="btn-box">
                                        {/* <button className="btn" onClick={() => setOpenOverlay(idx)}>
                                        Voir
                                    </button> */}
                                        <Link href={`/projects/${project.id}`} className="button is-link">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
            <svg className="triangle2" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="0,0 100,100 0,100" fill="#f0f0f0" />
            </svg>
        </>
    );
};

export default Gallery;