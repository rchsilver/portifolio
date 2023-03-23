import { NavBarHome } from "../components/NavBarHome/NavBarHome.js";
import { Profile } from "../components/Profile/Profile.js";
import { Skills } from "../components/Skills/Skills.js";
import { StyledHomePage } from "./StyledHomePage.js";

export function HomePage() {
  return (
    <StyledHomePage>
      <NavBarHome />
      <Profile />
      <Skills />
    </StyledHomePage>
  );
}
