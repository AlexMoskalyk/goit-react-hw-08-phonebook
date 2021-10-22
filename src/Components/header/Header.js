import React from "react";
import Navigation from "../navigation/Navigation";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <h2 className={styles.title}>Phone Book</h2>
      <Navigation />
    </header>
  );
};

export default Header;
