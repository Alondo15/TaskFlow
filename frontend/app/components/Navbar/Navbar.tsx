import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="TaskFlow" />
        <h1>TaskFlow</h1>
      </div>
      <nav>
        <ul>
          <li className={styles.active}>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/teams">Teams</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/settings">Settings</a>
          </li>
        </ul>
      </nav>

      <button>? Help</button>
    </header>
  );
};

export default Navbar;
