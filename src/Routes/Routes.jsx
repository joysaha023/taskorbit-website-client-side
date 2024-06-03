import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layouts/Dashboard";
import WorkerHome from "../Pages/Dashboard/WorkerHome/WorkerHome"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },

  //dashboard route
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // worker routes
      {
        path: 'workerhome',
        element: <WorkerHome></WorkerHome>
      }
    ]
  },
]);

export default router;
