import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

const NavigationItem = ({
  name,
  path,
  exact,
  isPrivate,
  isRestricted,
  isAuth,
}) => {
  return (
    <>
      {!isPrivate && !isRestricted && (
        <li className={styles.navItem}>
          <NavLink
            className={styles.navLink}
            activeClassName={styles.activeNavLink}
            to={path}
            exact={exact}
          >
            {name}
          </NavLink>
        </li>
      )}
      {isPrivate && !isRestricted && isAuth && (
        <li className={styles.navItem}>
          <NavLink
            className={styles.navLink}
            activeClassName={styles.activeNavLink}
            to={path}
            exact={exact}
          >
            {name}
          </NavLink>
        </li>
      )}
      {!isPrivate && isRestricted && !isAuth && (
        <li className={styles.navItem}>
          <NavLink
            className={styles.navLink}
            activeClassName={styles.activeNavLink}
            to={path}
            exact={exact}
          >
            {name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
