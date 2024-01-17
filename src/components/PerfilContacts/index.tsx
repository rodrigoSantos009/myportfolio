import { PerfilContactsContainer } from "./styles";

export function PerfilContacts() {
  return (
    <PerfilContactsContainer>
      <a href="https://www.linkedin.com/in/santosrodrigo009/" target="_blank">
        <i style={{ fontSize: 40 }} className="devicon-linkedin-plain colored"></i>
      </a>
      <a href="https://github.com/rodrigoSantos009/" target="_blank">
        <i style={{ fontSize: 40 }} className="devicon-github-original-wordmark"></i>
      </a>
      <a
        href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=009rodrigo009@gmail.com"
        target="_blank"
      >
        <img
            width="40"
            height="40"
            src="./assets/1522006_mail_email_inbox_post_send_icon.svg"
            alt=""
        />
        </ a>
    </PerfilContactsContainer>  
  )
}