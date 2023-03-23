import profileImage from "../../assets/foto-perfil-angello.png";
import { StyledProfile } from "./StyledProfile";

export function Profile() {
  return (
    <StyledProfile>
      <h3>Olá, me chamo Angêllo Dias</h3>
      <div>
        <img src={profileImage} alt="Foto de perfil de Angêllo" />
        <span>Sobre Mim</span>
      </div>
      <h3>E sou um programador!</h3>
    </StyledProfile>
  );
}
