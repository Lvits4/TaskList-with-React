import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*  <GlobalContextProvider> */}
    <PrimeReactProvider>
      <HashRouter>
        <Toaster position="top-right" reverseOrder={false} />
        <App />
      </HashRouter>
    </PrimeReactProvider>
    {/*  </GlobalContextProvider> */}
  </StrictMode>
);
