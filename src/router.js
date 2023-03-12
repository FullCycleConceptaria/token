import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/home/home";
import LogIn from "./pages/logIn/logIn";
import SignUp from "./pages/signUp/signUp";
import Asbl from "./pages/home/asbl/asbl";
import Groups from "./pages/home/groups/groups";
import Propositions from "./pages/home/propositions/propositions";
import Requests from "./pages/home/requests/requests";
import Profile from "./pages/profile/profile";
import ProfileEditing from './pages/profile/profileEditing/profileEditing';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: '/home/asbl',
            element: <Asbl />,
          },
          {
            path: '/home/groups',
            element: <Groups />,
          },
          {
            path: '/home/propositions',
            element: <Propositions />,
          },
          {
            path: '/home/requests',
            element: <Requests />,
          },
        ],
      },
      {
        path: '/log-in',
        element: <LogIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/profile/profile-editing',
        element: <ProfileEditing />
      },
    ],
  },
]);