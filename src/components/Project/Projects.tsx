import { StyledProjects } from "./StyledProjects";
import otakusCover from "../../assets/Cover/otakusDaKenzieCover.svg";

export function Projects() {
  return (
    <StyledProjects>
      <h2>Projetos</h2>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://kenzie-academy-brasil-developers.github.io/m2-projeto-em-equipe_GrupoBruno6/"
          >
            {/* <object data={otakusCover} type="image/svg+xml"></object> */}
            <img src={otakusCover} alt="" />

            <span>Otakus da Kenzie</span>
          </a>
        </li>
      </ul>
    </StyledProjects>
  );
}
