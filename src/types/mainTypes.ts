export interface Project{
    id: String,
    title: string;
    description: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export interface NavItem{
    label: string;
}