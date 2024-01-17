import { useEffect, useState } from "react";
import { ProjectsContainer } from "./styles";
import { projectsList } from "./projectsList";
import { ProjectCard } from "../ProjectCard";


export interface projectsListProps {
  type: string,
  projectDetails: {
    title: string,
    description: string,
    backgroundImage: string,
    urls: {
      live: string | null,
      github: string
    },
    tecs: {
      react: boolean,
      typescript: boolean,
      nodejs: boolean,
      prisma: boolean,
      mysql: boolean,
      firebase: boolean
    }
  } 
}[]

export function Projects() {
  const [projects, setProjects] = useState<projectsListProps[]>([]);

  useEffect(() => {
    setProjects(projectsList)
  }, [])

  return (
    <ProjectsContainer>
      <h2 
        id="projects"
        style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 34, color: "#C5C5C5" }}
      >Projetos</h2>
      <ProjectCard projects={projects} />
    </ProjectsContainer>  
  )
}