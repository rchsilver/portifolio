import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { PortifolioContext } from "../../../context/PortifolioContext";
import { StyledProfileModal } from "./StyledProfileModal";

export function ProfileModal() {
  const { show, handleClose } = useContext(PortifolioContext);
  return (
    <StyledProfileModal>
      <Modal animation={true} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Angêllo Dias - O Dev. persistente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Sou um Dev apaixanodo pela minha área, saí de onde nasci para poder
          estudar programação. Não desistir de estudar mesmo com meu curso tendo
          sido feixado na pandemia. E agora estou aprendendo cada dia mais sobre
          o mundo mágico do Desenvolvimento FullStack.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1DJJUt628NkGa-G7NeBtfPKbFFNJUGElFV7BQJElYUQc/edit?usp=sharing"
          >
            <Button variant="primary">Baixar CV</Button>
          </a>
        </Modal.Footer>
      </Modal>
    </StyledProfileModal>
  );
}
