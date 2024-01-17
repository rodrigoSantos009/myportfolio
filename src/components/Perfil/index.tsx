import { PerfilContactsContainer } from "../PerfilContacts/styles";
import { PerfilContainer } from "./styles";
import logo from "../../assets/avatar.png";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

import CurrículoPDF from "../../assets/Corriculo.pdf";

export function Perfil() {
  return (
    <PerfilContainer>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          style={{ borderRadius: "50%", height: "200px", width: "213px" }}
          src={logo}
          alt=""
        />
        <h1
          id="home"
          style={{
            fontWeight: 800,
            fontSize: 50,
            textAlign: "center",
            color: "#fff",
            fontFamily: "Poppins",
          }}
        >
          Olá! Meu nome é{" "}
          <span style={{ color: "blueviolet" }}>Rodrigo Santos</span>
        </h1>
        <div>
          <a
            href="https://www.linkedin.com/in/santosrodrigo009/"
            target="_blank"
          >
            <FaLinkedin style={{ fontSize: 50, color: "#0a66c2" }} />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=009rodrigo009@gmail.com"
            target="_blank"
          >
            <CgMail style={{ fontSize: 50, color: "#c71610" }} />
          </a>
        </div>
        <PerfilContactsContainer />
        <p
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: 20,
            textAlign: "center",
            letterSpacing: "0.02em",
            margin: "20px 0 20px 0",
            color: "#C5C5C5",
          }}
        >
          Desenvolvedor Full Stack em desenvolimento com paixão por tecnologia e
          resolução de problemas, buscando oportunidades para aplicar minhas
          habilidades técnicas e contribuir para projetos desafiadores.
          Comprometido em aprender continuamente e agregar valor a equipes
          dinâmicas.
        </p>
        <a
          href={CurrículoPDF}
          download="Currículo"
          target="_blank"
          style={{
            backgroundColor: "#F1502F",
            color: "#fff",
            padding: 10,
            textDecoration: "none",
            borderRadius: 5,
            fontFamily: "Poppins",
          }}
        >
          Donwload Corrículo
        </a>
      </section>
    </PerfilContainer>
  );
}
