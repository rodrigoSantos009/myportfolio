import { TecnologiesContainer, Tecs } from "./styles";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TbBrandNpm } from "react-icons/tb";
import { FaGitSquare } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Tooltip } from "@mui/material";
import { SiPrisma } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

export function Tecnologies() {
  return (
    <TecnologiesContainer>
      <p
        style={{
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: 24,
          color: "#C5C5C5",
        }}
      >
        Tecnologias
      </p>
      <Tecs>
        <Tooltip title="HMTL">
          <FaHtml5 color="#e34c26" fontSize={50} />
        </Tooltip>
        <FaCss3Alt color="#2965f1 " fontSize={50} />
        <DiJavascript color="#2965f1" fontSize={50} />
        <SiTypescript color="#007acc" fontSize={48} />
        <FaReact color="#61DBFB" fontSize={50} />
        <FaNode color="#3c873a" fontSize={50} />
        <SiMysql color="#00758F" fontSize={50} />
        <TbBrandNpm color="#CC3534" fontSize={50} />
        <FaGitSquare color="#F1502F" fontSize={50} />
        <IoLogoGithub color="#fff" fontSize={50} />
        <SiPrisma color="#fff" fontSize={50} />
        <SiTailwindcss color="#007acc" fontSize={50} />
      </Tecs>
    </TecnologiesContainer>
  );
}