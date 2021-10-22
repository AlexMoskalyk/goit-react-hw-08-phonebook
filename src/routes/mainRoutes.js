import AuthPage from "../pages/AuthPage";
import ContactsPage from "../pages/ContactsPage";
import HomePage from "../pages/HomePage";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: HomePage,
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "Contacts",
    path: "/contacts",
    exact: true,
    component: ContactsPage,
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "Sign Up",
    path: "/register",
    exact: true,
    component: AuthPage,
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "Sign In",
    path: "/login",
    exact: true,
    component: AuthPage,
    isPrivate: false,
    isRestricted: true,
  },
];
