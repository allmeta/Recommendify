import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        position: "relative",
        margin: "2em 0 0",
        height: "13em",
        paddingBottom: "3em"
      }}
    >
      <div className="gradient-3" />
      <div className="gradient-4">
        <div
          className="width pad center"
          style={{
            textAlign: "center",
            zIndex: 2,
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
