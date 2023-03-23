import { createContext, useState } from "react";

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

interface IPortifolioContext {
  show: boolean;
  handleClose: () => void;
  handleShow: () => void;
}

export const PortifolioContext = createContext({} as IPortifolioContext);
export function PortifolioProvider({ children }: IDefaultProviderProps) {
  const [show, setShow] = useState(false);

  function handleClose() {
    setShow(false);
  }
  function handleShow() {
    setShow(true);
  }
  return (
    <PortifolioContext.Provider value={{ show, handleClose, handleShow }}>
      {children}
    </PortifolioContext.Provider>
  );
}
