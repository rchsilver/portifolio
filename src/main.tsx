import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./style/GlobalStyled";
import { Reset } from "./style/Reset";
import { StyledScrollBars } from "./style/ScrollBars";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <StyledScrollBars />
    <App />
  </React.StrictMode>
);
