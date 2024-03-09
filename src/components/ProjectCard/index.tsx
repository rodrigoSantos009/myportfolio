import { projectsListProps } from "../Projects";
import { Cards, ProjectCardContainer, CardImage, Tecs, Card } from "./styles";

import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  projects: projectsListProps[];
}

export function ProjectCard({ projects }: ProjectCardProps) {
  const { t } = useTranslation();
  return (
    <ProjectCardContainer>
      <Cards>
        {projects.map((project, index) => (
          <Card key={index}>
            <h3 style={{ textAlign: "center", color: "#C5C5C5" }}>
              {`${project.projectDetails.title}  - (${project.type})`}
            </h3>
            <p style={{ color: "#a8a8a8" }}>
              {t(`${project.projectDetails.title}`)}
            </p>
            <CardImage
              style={{
                backgroundImage: `url(${project.projectDetails.backgroundImage})`,
              }}
            ></CardImage>
            <Tecs>
              {project.projectDetails.tecs.react && (
                <FaReact color="#61DBFB" fontSize={50} />
              )}
              {project.projectDetails.tecs.typescript && (
                <SiTypescript color="#007acc" fontSize={48} />
              )}
              {project.projectDetails.tecs.nodejs && (
                <FaNode color="#3c873a" fontSize={50} />
              )}
              {project.projectDetails.tecs.prisma && (
                <SiPrisma color="#fff" fontSize={50} />
              )}
              {project.projectDetails.tecs.mysql && (
                <SiMysql color="#00758F" fontSize={50} />
              )}
              {project.projectDetails.tecs.firebase && (
                <SiFirebase color="orange" fontSize={50} />
              )}
              {project.projectDetails.tecs.tailwindcss && (
                <SiTailwindcss color="#007acc" fontSize={50} />
              )}
            </Tecs>
            <div style={{ marginTop: 20, display: "flex", gap: 15 }}>
              {project.projectDetails.urls.live ? (
                <a
                  href={project.projectDetails.urls.live}
                  target="_blank"
                  style={{
                    backgroundColor: "#00758F",
                    width: 100,
                    padding: 10,
                    borderRadius: 10,
                    color: "#fff",
                    textDecoration: "none",
                    textAlign: "center",
                    fontFamily: "Poppins",
                  }}
                >
                  Live
                </a>
              ) : null}
              {
                <a
                  href={project.projectDetails.urls.github}
                  target="_blank"
                  style={{
                    backgroundColor: "#fff",
                    width: 100,
                    padding: 10,
                    borderRadius: 10,
                    color: "black",
                    textDecoration: "none",
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 500,
                  }}
                >
                  GitHub
                </a>
              }
            </div>
          </Card>
        ))}
      </Cards>
    </ProjectCardContainer>
  );
}
