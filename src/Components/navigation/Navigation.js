import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationItem from "./NavigationItem";
import { NavigationContainer } from "./NavigationStyled";
import { isAuthSelector } from "../../redux/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import { signOutSuccess } from "../../redux/auth/authActions";

const Navigation = ({ routes = mainRoutes }) => {
  const isAuth = useSelector(isAuthSelector);
  // const isAuth = false;
  const dispatch = useDispatch();
  const signOut = () => dispatch(signOutSuccess());

  return (
    <NavigationContainer>
      <ul className='navList'>
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
          <li className='navItem' onClick={signOut}>
            <span className='navLink'>Sign Out</span>
          </li>
        )}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
