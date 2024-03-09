import { useEffect, useState } from "react";
import { ProjectsContainer } from "./styles";
import { projectsList } from "./projectsList";
import { ProjectCard } from "../ProjectCard";
import { useTranslation } from "react-i18next";


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
      firebase: boolean,
      tailwindcss: boolean,
    }
  } 
}[]

export function Projects() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<projectsListProps[]>([]);

  useEffect(() => {
    setProjects(projectsList)
  }, [])

  return (
    <ProjectsContainer>
      <h2 
        id="projects"
        style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 34, color: "#C5C5C5" }}
      >{t("projects")}</h2>
      <ProjectCard projects={projects} />
    </ProjectsContainer>  
  )
}