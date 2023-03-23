import { Contact } from "../components/Contact/Contact.js";
import { NavBarHome } from "../components/NavBarHome/NavBarHome.js";
import { Profile } from "../components/Profile/Profile.js";
import { Projects } from "../components/Project/Projects.js";
import { Skills } from "../components/Skills/Skills.js";
import { StyledHomePage } from "./StyledHomePage.js";

export function HomePage() {
  return (
    <StyledHomePage>
      <NavBarHome />
      <Profile />
      <Skills />
      <Projects />
      <Contact />
    </StyledHomePage>
  );
}
