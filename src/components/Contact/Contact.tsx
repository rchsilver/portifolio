import { StyledContact } from "./StyledContact";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

export function Contact() {
  return (
    <StyledContact>
      <h2 id="contatc">Contatos</h2>
      <ul>
        <li>
          <AiFillLinkedin />
          <a target="_blank" href="https://www.linkedin.com/in/angello-dias/">
            LinkedIn
          </a>
        </li>
        <li>
          <AiFillGithub />
          <a target="_blank" href="https://github.com/rchsilver">
            GitHub
          </a>
        </li>
        <li>
          <AiOutlineMail />
          <a target="_blank" href="mailto:rchsilver@gmail.com">
            rchsilver@gmail.com
          </a>
        </li>
      </ul>
    </StyledContact>
  );
}
