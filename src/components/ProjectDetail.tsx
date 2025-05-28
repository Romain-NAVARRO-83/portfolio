import React from 'react';

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
        <>
            <div className="project-detail container">
                <h1>{project.title}</h1>
                <h2>{project.subtitle}</h2>
                <p>{project.shortDescription}</p>
                <div>{project.longDescription}</div>
                <div className="media">
                    {project.images && project.images.map((src, index) => (
                        <div key={index}>
                            <img src={src} alt={`${project.title} image ${index + 1}`} />
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
                <div className='panel'>
                    <h3 className='panel-heading'>Stack Technique </h3>
                    {project.techStack.map((tech, index) => (
                        <div className='panel-block' key={index}>{tech}</div>
                    ))}
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