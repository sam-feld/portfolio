import { Skill, Project } from './types'

export async function getSkills(): Promise<Skill[]> {
    const response = await fetch('/data/skills.json');
    if (!response.ok) throw new Error('Failed to load skills');
    return response.json();
  }
  

  export async function getProjects(): Promise<Project[]> {
    const response = await fetch('/data/projects.json');
    if (!response.ok) throw new Error('Failed to load projects');
    return response.json();
  }

  export async function getProjectById(id: number): Promise<Project> {
    const projects = await getProjects();
    const project = projects.find((p) => p.id === id);
    if (!project) throw new Error(`Project with ID ${id} not found`);
    return project;
  }