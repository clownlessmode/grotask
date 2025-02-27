import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "@app/providers/theme-provider";
import { Authorization } from "@pages/authorization";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Authorization />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
