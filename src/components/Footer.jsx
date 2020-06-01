//jshint esversion:6
import React from "react";
const currentDay = new Date();

function Footer() {
  return (
    <footer>
      <p className="footer">Copyright © {currentDay.getFullYear()}</p>
    </footer>
  );
}
export default Footer;
