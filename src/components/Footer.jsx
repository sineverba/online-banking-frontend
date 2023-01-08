import React from "react";

export function Footer() {
  return (
    <footer className="footer">
      <p>V {process.env.REACT_APP_VERSION}</p>
    </footer>
  );
}

export default Footer;
