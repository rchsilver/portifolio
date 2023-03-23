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
          <span>HTML</span>
        </li>
        <li>
          <FaCss3 />
          <span>CSS</span>
        </li>
        <li>
          <SiJavascript />
          <span>JavaScript</span>
        </li>
        <li>
          <SiTypescript />
          <span>TypeScript</span>
        </li>
        <li>
          <SiStyledcomponents />
          <span>CSS-in-JS/TS</span>
        </li>
        <li>
          <FaReact />
          <span>React</span>
        </li>
        <li>
          <SiGithub />
          <span>GitHub</span>
        </li>
      </ul>
    </StyledSkill>
  );
}
