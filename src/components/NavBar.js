import React from "react";
import HamburgerMenu from "./HamburgerMenu";

function NavBar({ className }) {
  return (
    <div className={`navBar ${className}`}>
      <div className="navBar__container">
        <img
          src="https://i.ibb.co/gvPx198/tipo-A-perfil-fondoblanco.png"
          alt=""
        />

        <HamburgerMenu className="navBar__container-menu" />
      </div>
    </div>
  );
}

export default NavBar;
