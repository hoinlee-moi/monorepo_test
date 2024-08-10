import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TrpcProvider from "./trpc/trpcProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TrpcProvider>
      <App />
    </TrpcProvider>
  </StrictMode>
);
