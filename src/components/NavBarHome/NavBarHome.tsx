import { StyledNavBar } from "./StyledNavBar";
export function NavBarHome() {
  return (
    <StyledNavBar>
      <h2>Portifólio</h2>
      <nav>
        <a>Perfil</a>
        <a href="#skills">Habilidades</a>
        <a>Projetos</a>
        <a href="#contatc">Contatos</a>
      </nav>
    </StyledNavBar>
  );
}
