import { projectsListProps } from "../Projects";
import { Card, ProjectCardContainer, CardImage, Tecs } from "./styles";

import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

interface ProjectCardProps {
  projects: projectsListProps[];
}

export function ProjectCard({ projects }: ProjectCardProps) {
  return (
    <ProjectCardContainer>
      <Card>
        {projects.map((project, index) => (
          <div
            style={{
              backgroundColor: "rgb(9, 9, 12)",
              padding: "10px 50px",
              borderRadius: 5,
            }}
            key={index}
          >
            <h3 style={{ textAlign: "center", color: "#C5C5C5" }}>
              {`${project.projectDetails.title}  - (${project.type})`}
            </h3>
            <p style={{ color: "#a8a8a8" }}>
              {project.projectDetails.description}
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
          </div>
        ))}
      </Card>
    </ProjectCardContainer>
  );
}
