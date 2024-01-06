import { createRoot } from "react-dom/client";
import logo from "./assets/logo.png";
import "./styles.scss";

createRoot(document.getElementById("root")).render(
  <div>
    <h1>Hello World 🌍</h1>
    <img src={logo} style={{ width: 300 }} />
  </div>
);