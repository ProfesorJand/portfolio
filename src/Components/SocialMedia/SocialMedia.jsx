import React from "react";
import { BsGithub, BsLinkedin, BsInstagram, BsYoutube} from "react-icons/bs";
import { IconContext } from "react-icons";
import Styles from "./socialMedia.module.css";

export default function SocialMedia() {
  return (
    <>
      <div className={Styles.container}>
        <div className="containerIcons">
          <a href="https://github.com/ProfesorJand" target="_blank" rel="noopener noreferrer">
          <IconContext.Provider value={{ className: `${Styles["react-icons-github"]} ${Styles["react-icons"]} ` }}>
            <BsGithub />
          </IconContext.Provider>
          </a>
        </div>
        <div className="containerIcons">
          <a href="https://www.linkedin.com/in/profesorjand/" target="_blank" rel="noopener noreferrer">
          <IconContext.Provider value={{ className: `${Styles["react-icons-linkedin"]}  ${Styles["react-icons"]} `}}>
            <BsLinkedin />
          </IconContext.Provider>
          </a>
        </div>
        <div className="containerIcons">
          <a href="https://www.instagram.com/in/jorgelandradey/" target="_blank" rel="noopener noreferrer">
          <IconContext.Provider value={{ className: `${Styles["react-icons-instagram"]} ${Styles["react-icons"]} ` }}>
            <BsInstagram />
          </IconContext.Provider>
          </a>
        </div>
        <div className="containerIcons">
          <a href="https://www.youtube.com/@profesorjand" target="_blank" rel="noopener noreferrer"> 
          <IconContext.Provider value={{ className: `${Styles["react-icons-youtube"] }  ${Styles["react-icons"]} `}}>
            <BsYoutube />
          </IconContext.Provider>
          </a>
        </div>
      </div>
    </>
  );
}
