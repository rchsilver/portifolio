import { StyledNavBar } from "./StyledNavBar";
export function NavBarHome() {
  return (
    <StyledNavBar>
      <h2>Portifólio</h2>
      <nav>
        <a href="#profile">Perfil</a>
        <a href="#skills">Habilidades</a>
        <a href="#project">Projetos</a>
        <a href="#contatc">Contatos</a>
      </nav>
    </StyledNavBar>
  );
}
