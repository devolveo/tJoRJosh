import React from "react";
import { Menu } from "react-feather";

import useToggle from "./use-toggle";
import Drawer from "./Drawer.jsx";
import styles from "./Header.module.css";

function Header() {
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

  return (
    <header>
      <a href="">Kaboom</a>
      <nav role="navigation" aria-label="Main menu">
        <button className={styles.hamburgerBtn} onClick={toggleIsMenuOpen}>
          <Menu aria-hidden="true" focusable="false" />
        </button>
        {isMenuOpen && (
          <Drawer handleDismiss={toggleIsMenuOpen}>
            <ul className={styles.navigationList}>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Gallery</a>
              </li>
              <li>
                <a href="">Photographers</a>
              </li>
              <li>
                <a href="">Submit Work</a>
              </li>
            </ul>
          </Drawer>
        )}
      </nav>
    </header>
  );
}

export default Header;
