import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*  <GlobalContextProvider> */}
    <PrimeReactProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </PrimeReactProvider>
    {/*  </GlobalContextProvider> */}
  </StrictMode>
);
