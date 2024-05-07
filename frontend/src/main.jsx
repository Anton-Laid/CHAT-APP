import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvaider } from "./context/AuthContext.jsx";
import { SocketContextProvider } from "./context/SocketContent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvaider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </AuthContextProvaider>
    </BrowserRouter>
  </React.StrictMode>
);
