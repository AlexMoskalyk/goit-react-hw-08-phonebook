import React from "react";
import { Switch, useLocation } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PrivateRoute";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../../redux/auth/auth-selector";

const Main = () => {
  const location = useLocation();
  // const isAuth = useSelector(isAuthSelector);
  const isAuth = false;
  return (
    <main>
      <Switch>
        {mainRoutes.map(({ path, exact, component, isPrivate, isRestricted }) =>
          isPrivate ? (
            <PrivateRoute
              path={path}
              exact={exact}
              component={component}
              isAuth={isAuth}
              key={path}
            />
          ) : (
            <PublicRoute
              path={path}
              exact={exact}
              component={component}
              isAuth={isAuth}
              isRestricted={isRestricted}
              key={path}
            />
          )
        )}
      </Switch>
    </main>
  );
};

export default Main;

// const Main = () => {
//   const isAuth = useSelector(isAuthSelector);
//   return (
//     <main>
//       <Switch>
//         {mainRoutes.map(({ path, exact, component, isPrivate, isRestricted }) =>

//       </Switch>
//     </main>
//   );
// };

// export default Main;

/* isPrivate ? (
            isAuth ? (
              <Route path={path} exact={exact} component={component} />
            ) : (
              <Redirect to="/login" />
            )
          ) : isAuth && isRestricted ? (
            <Redirect to="/contacts" />
          ) : (
            <Route path={path} exact={exact} component={component} />
          )
        )} */
