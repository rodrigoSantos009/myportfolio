import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { ListMenu, NavBarContainer } from "./styles";
import { RiMiniProgramFill } from "react-icons/ri";

export function NavBar() {
  const { t } = useTranslation();
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
        {t("portfolio")}
      </p>
      <ListMenu>
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
            {t("home")}
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
            {t("projects")}
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
            {t("contact")}
          </a>
        </li>
      </ListMenu>
      <LanguageSwitcher />
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
        {t("github")}
      </a>
    </NavBarContainer>
  );
}
