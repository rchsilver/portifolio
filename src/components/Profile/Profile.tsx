import profileImage from "../../assets/foto-perfil-angello.png";
import React, { useContext } from "react";
import { ProfileModal } from "./ProfileModal/ProfileModal";
import { StyledProfile } from "./StyledProfile";
import { PortifolioContext } from "../../context/PortifolioContext";

export function Profile() {
  const { handleShow } = useContext(PortifolioContext);
  return (
    <>
      <div id="profile" />
      <StyledProfile>
        <h3 id="profile">Olá, me chamo Angêllo Dias</h3>
        <div>
          <img src={profileImage} alt="Foto de perfil de Angêllo" />
          <span onClick={handleShow}>Sobre Mim</span>
        </div>
        <h3>E sou um programador!</h3>

        <ProfileModal />
      </StyledProfile>
    </>
  );
}
