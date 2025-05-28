export interface Project {
    id: string;
    title: string;
    subtitle: string;
    shortDescription: string;
    longDescription: string;
    images: string[];
    video?: string;
    technicalStack: string[];
}

export interface Profile {
    name: string;
    title: string;
    skills: string[];
    experience: string[];
    education: string[];
}