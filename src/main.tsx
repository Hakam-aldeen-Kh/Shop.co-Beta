import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// * React Router Dom
import { BrowserRouter } from "react-router-dom";
// * Redux Toolkit
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
// * Material Tailwind
import { ThemeProvider } from "@material-tailwind/react";
// * Axios 
import "./services/axios-global.js"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
