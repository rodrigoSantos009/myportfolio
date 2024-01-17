import { FooterContainer } from "./styles";

import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";

export function Footer() {
  const [linkedinIconColor, setLinkedinIconColor] = useState("#a8a8a8");
  const [gmailIconColor, setGmailIconColor] = useState("#a8a8a8");
  const [gitHubIconColor, setGitHubIconColor] = useState("#a8a8a8");
  const [instagramIconColor, setInstagramIconColor] = useState("#a8a8a8");

  const hover = (icon: string) => {
    if (icon === "linkedin") setLinkedinIconColor("#0a66c2");
    if (icon === "gmail") setGmailIconColor("#c71610");
    if (icon === "github") setGitHubIconColor("#fff");
    if (icon === "instagram") setInstagramIconColor("#e63946");
  };

  const down = () => {
    setLinkedinIconColor("#a8a8a8");
    setGmailIconColor("#a8a8a8");
    setGitHubIconColor("#a8a8a8");
    setInstagramIconColor("#a8a8a8");
  };

  return (
    <FooterContainer>
      <h2 id="contacts" style={{ color: "#a8a8a8", fontSize: 24 }}>Contatos</h2>
      <div>
        <a href="https://www.linkedin.com/in/santosrodrigo009/" target="_blank">
          <FaLinkedin
            onMouseOver={() => hover("linkedin")}
            onMouseOut={() => down()}
            className="linkedin"
            style={{
              fontSize: 55,
              color: linkedinIconColor,
              cursor: "pointer",
            }}
          />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=009rodrigo009@gmail.com"
          target="_blank"
        >
          <CgMail
            onMouseOver={() => hover("gmail")}
            onMouseOut={() => down()}
            style={{ fontSize: 55, color: gmailIconColor, cursor: "pointer" }}
          />
        </a>
        <a href="https://github.com/rodrigoSantos009/" target="_blank">
          <IoLogoGithub
            onMouseOver={() => hover("github")}
            onMouseOut={() => down()}
            style={{ fontSize: 55, color: gitHubIconColor, cursor: "pointer" }}
          />
        </a>
        <a href="https://www.instagram.com/_rodriigosaantos_/" target="_blank">
          <FaInstagram
            onMouseOver={() => hover("instagram")}
            onMouseOut={() => down()}
            style={{
              fontSize: 55,
              color: instagramIconColor,
              cursor: "pointer",
            }}
          />
        </a>
      </div>
    </FooterContainer>
  );
}
