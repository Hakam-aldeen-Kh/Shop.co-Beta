import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// * React Router Dom
import { BrowserRouter } from "react-router-dom";
// * Redux Toolkit
import { Provider } from "react-redux";
import { store, persistor } from "./store/index.ts";
import { PersistGate } from "redux-persist/integration/react";
// * Material Tailwind
import { ThemeProvider } from "@material-tailwind/react";
// * Axios
import "./services/axios-global.js";
import AppRouter from "@routes/AppRouter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider>
            <AppRouter />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
