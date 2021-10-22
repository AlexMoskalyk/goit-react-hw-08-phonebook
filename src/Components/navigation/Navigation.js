import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { signOutSuccess } from "../../redux/auth/auth-actions";
import { isAuthSelector } from "../../redux/auth/auth-selector";
import { mainRoutes } from "../../routes/mainRoutes";

import styles from "./Navigation.module.css";
import NavigationItem from "./navigationItem/NavigationItem";

const Navigation = ({ routes = mainRoutes }) => {
  // const isAuth = useSelector(isAuthSelector);
  const isAuth = false;
  const dispatch = useDispatch();
  const signOut = () => dispatch(signOutSuccess());
  return (
    <nav>
      <ul className={styles.navList}>
        {routes.map(({ name, path, exact, isPrivate, isRestricted }) => (
          <NavigationItem
            key={path}
            name={name}
            path={path}
            exact={exact}
            isPrivate={isPrivate}
            isRestricted={isRestricted}
            isAuth={isAuth}
          />
        ))}
        {isAuth && (
          <li className={styles.navItem} onClick={signOut}>
            <span className={styles.navLink}>Sign out</span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
