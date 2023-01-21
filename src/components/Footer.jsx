import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
    
      
      <div>
        
        <img
          src={"https://avatars.githubusercontent.com/u/99877936?s=400&u=fecddad24188969d8ef62b4244677ca01626c63c&v=4"}
          alt="Founder"
        />

        <h2>Debraj Rout</h2>
        <p>Join 30 million traders and investors making better,<br></br> brighter decisions in the world markets.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/debraj-rout-32488821b/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/_dev_itz/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/debrajrout" target={"blank"}>
            <AiFillGithub />
            <a href="https://twitter.com/debrajrout28" target={"blank"}>
            <AiFillTwitterCircle />
          </a>
          </a>
        </article>
      </aside>
    </footer>
  );
};

export default Footer;
