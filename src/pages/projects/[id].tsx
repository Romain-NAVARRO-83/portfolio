import { useRouter } from 'next/router';
import ProjectDetail from '../../components/ProjectDetail';
import projectsData from '../../data/projects';

const ProjectPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const project = projectsData.find((p) => p.id === id);

    if (!project) {
        return <div>Projet introuvable</div>;
    }

    return <ProjectDetail project={project} />;
};

export default ProjectPage;