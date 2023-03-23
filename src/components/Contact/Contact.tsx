import { StyledContact } from "./StyledContact";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

export function Contact() {
  return (
    <StyledContact>
      <h2>Contatos</h2>
      <ul>
        <li>
          <AiFillLinkedin />
          <a href="https://github.com/rchsilver">LinkedIn</a>
        </li>
        <li>
          <AiFillGithub />
          <a href="https://www.linkedin.com/in/angello-dias/">GitHub</a>
        </li>
        <li>
          <AiOutlineMail />
          <a href="mailto:rchsilver@gmail.com">rchsilver@gmail.com</a>
        </li>
      </ul>
    </StyledContact>
  );
}
