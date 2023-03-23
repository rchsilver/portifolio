import { StyledSkill } from "./StyledSkylls";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import {
  SiStyledcomponents,
  SiTypescript,
  SiJavascript,
  SiGithub,
} from "react-icons/si";

export function Skills() {
  return (
    <StyledSkill>
      <h2>Habilidades</h2>
      <ul>
        <li>
          <FaHtml5 />
          <a>HTML</a>
        </li>
        <li>
          <FaCss3 />
          <a>CSS</a>
        </li>
        <li>
          <SiJavascript />
          <a>JavaScript</a>
        </li>
        <li>
          <SiTypescript />
          <a>TypeScript</a>
        </li>
        <li>
          <SiStyledcomponents />
          <a>CSS-in-JS/TS</a>
        </li>
        <li>
          <FaReact />
          <a>React</a>
        </li>
        <li>
          <a>
            <SiGithub />
            GitHub
          </a>
        </li>
      </ul>
    </StyledSkill>
  );
}
