import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/home/home";
import LogIn from "./pages/logIn/logIn";
import SignUp from "./pages/signUp/signUp";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/log-in',
        element: <LogIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
]);