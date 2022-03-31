import { useContext } from "react";

import { ThemeContext } from "../../context";
import "./Footer.css";

const Footer = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <footer className="f" style={{ backgroundColor: darkMode && "#fff" }}>
      <div className="f-info-item">
        <a
          href="https://www.linkedin.com/in/khalid-musa-2024a1195/"
          target="_blank"
          rel="noreferrer"
        >
          <i
            class="f-icon fa-brands fa-linkedin-in"
            style={{ color: darkMode && "#3b8d99 " }}
          ></i>
        </a>
        <a href="https://github.com/khld-musa" target="_blank" rel="noreferrer">
          <i
            class="f-icon fa-brands fa-github"
            style={{ color: darkMode && "#3b8d99 " }}
          ></i>
        </a>
      </div>
      <div>
        <p className="f-text" style={{ color: darkMode && "#333" }}>
          Khalid Musa 2022, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
// color: #cbf4fa;
