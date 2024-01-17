import { NavBarContainer } from "./styles";
import { RiMiniProgramFill } from "react-icons/ri";

export function NavBar() {
  return (
    <NavBarContainer>
      <p
        style={{
          color: "#fff",
          fontFamily: "Poppins",
          fontWeight: 600,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 20,
          gap: 5,
        }}
      >
        <RiMiniProgramFill color="#fff" style={{ fontSize: 30 }} />
        Portifólio
      </p>
      <ul
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "space-between",
          listStyle: "none",
        }}
      >
        <li>
          <a
            style={{
              textDecoration: "none",
              color: "#a8a8a8",
              fontSize: "18px",
              fontFamily: "Poppins",
            }}
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            style={{
              textDecoration: "none",
              color: "#a8a8a8",
              fontSize: "18px",
              fontFamily: "Poppins",
            }}
            href="#projects"
          >
            Projetos
          </a>
        </li>
        <li>
          <a
            style={{
              textDecoration: "none",
              color: "#a8a8a8",
              fontSize: 18,
              fontFamily: "Poppins",
            }}
            href="#contacts"
          >
            Contato
          </a>
        </li>
      </ul>
      <a
        href="https://github.com/rodrigoSantos009/"
        target="_blank"
        style={{
          color: "#fff",
          textDecoration: "none",
          border: "1px solid #fff",
          padding: 10,
          borderRadius: 15,
          fontFamily: "Poppins",
        }}
      >
        Perfil GitHub
      </a>
    </NavBarContainer>
  );
}
