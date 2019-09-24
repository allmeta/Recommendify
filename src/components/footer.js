import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        position: "relative",
        height: "10em"
      }}
    >
      <div className="gradient-3" />
      <div className="gradient-4">
        <div
          className="width pad center"
          style={{
            textAlign: "center",
            width: "100%",
            height: "100%"
          }}
        >
          <h3>Made by Thomas Almestad</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
