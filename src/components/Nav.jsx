import React, { useState } from "react";
import Backdrop from "../components/Backdrop";
import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import menuCloseIcon from "../assets/images/icon-menu-close.svg"

const Nav = () => {
  //mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav>
      <div className="menuItems">
        <img className="logo" src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </div>
      {!isMenuOpen && (
        <img
        className="menu"
          onClick={toggleMenu}
          src={menuIcon}
          alt="menu-icon"
        />
      )}
      {isMenuOpen && (
        <>
          <img
          className="menu_clicked"
             src={menuCloseIcon}
            onClick={toggleMenu}
            alt="close-icon"
          />
          <div className="sidebar">
            <ul>
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </div>
          <Backdrop onClose={toggleMenu} />
        </>
      )}
    </nav>
  );
};

export default Nav;
