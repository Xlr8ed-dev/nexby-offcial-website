import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/* <ToastContainer
      position="top-right"
      autoClose={4000}
      theme="dark"
      closeOnClick
      pauseOnHover
      draggable
    /> */}
    <ToastContainer
      position="top-right"
      autoClose={4000}
      theme="light"
      toastClassName="bg-white text-slate-900 rounded-xl shadow-lg border border-slate-200"
      progressClassName="bg-blue-600"
      closeOnClick
      pauseOnHover
      draggable
    />
  </StrictMode>,
);
