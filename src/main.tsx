import React from "react";
import ReactDOM from "react-dom/client";
import { FcLike } from "react-icons/fc";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <header>
      <h1>Ảnh của chúng taaa <FcLike /></h1>
     
      
    </header>
    <main>
      <App />
    </main>
  </React.StrictMode>,
);
