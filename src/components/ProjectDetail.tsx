import React from 'react';
import Triangle from './triangle';

interface Project {
    id: string;
    title: string;
    subtitle: string;
    shortDescription: string;
    longDescription: string;
    images: string[];
    video?: string;
    techStack: string[];
}

interface ProjectDetailProps {
    project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
    return (
        <><h1 className='darkline'>{project.title}</h1>
            <Triangle />
            <h2 className='colorline'>{project.subtitle}</h2 >
            <Triangle />
            <div className="project-detail nano">
                {/* <div className='l6'></div> */}

                <div className="l6">
                    {project.images && project.images.map((src, index) => (
                        <div key={index}>
                            <img src={src} alt={`${project.title} image ${index + 1}`} width="300" />
                        </div>
                    ))}
                    {project.video && (
                        <div>
                            <video controls>
                                <source src={project.video} type="video/mp4" />
                                Votre navigateur ne supporte pas la vidéo.
                            </video>
                        </div>
                    )}
                </div>
                <div className='l6'>
                    <div className="shortDescription">{project.shortDescription}</div>
                    <div>{project.longDescription}</div>
                    <div className='panel'>
                        <h3 className='panel-heading'>Stack Technique </h3>
                        <ul className='stack'>
                            {project.techStack.map((tech, index) => (
                                <li key={index} >
                                    {tech === 'Next.js' ? (
                                        <>  <img src="/images/vector/nextjs.svg" alt="Next.js" width="40" valign="middle" />
                                            {tech}
                                        </>

                                    ) : (
                                        tech
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                {/* <ul>
                {project.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul> */}
            </div>
            <div className='project-detail-navigation'><a href={`/projects/${parseInt(project.id) + 1}`} className="button is-link">Suivant</a></div>

        </>
    );
};

export default ProjectDetail;