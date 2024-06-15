import React from "react";

let c = new Date();
let copyrightYear = c.getFullYear();

function Footer() {
  return (
    <footer>
      <div className="Copyright">
        <p>© COPYRIGHT {copyrightYear}</p>
      </div>
      <div className="FooterLinks">
        <a href="#">INSTAGRAM</a>
        <a href="#">X</a>
        <a href="#">LINKEDIN</a>
      </div>
    </footer>
  );
}

export default Footer;
