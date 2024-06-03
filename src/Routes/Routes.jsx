import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layouts/Dashboard";
import WorkerHome from "../Pages/Dashboard/WorkerHome/WorkerHome"
import TaskList from "../Pages/Dashboard/TaskList/TaskList";
import WorkerSubmission from "../Pages/Dashboard/WorkerSubmission/WorkerSubmission";
import CreatorHome from "../Pages/Dashboard/CreatorHome/CreatorHome";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";
import CreatorTask from "../Pages/Dashboard/CreatorTask/CreatorTask";
import PurchaseCoin from "../Pages/Dashboard/PurchaseCoin/PurchaseCoin";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageTask from "../Pages/Dashboard/ManageTask/ManageTask";

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
      },
      {
        path: 'tasklist',
        element: <TaskList></TaskList>
      },
      {
        path: 'workersubmission',
        element: <WorkerSubmission></WorkerSubmission>
      },

      //Task creator routes
      {
        path: 'creatorHome',
        element: <CreatorHome></CreatorHome>
      },
      {
        path: 'AddTask',
        element: <AddTask></AddTask>
      },
      {
        path: 'creatortask',
        element: <CreatorTask></CreatorTask>
      },
      {
        path: 'parchaseCoin',
        element: <PurchaseCoin></PurchaseCoin>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },

      // Admin Routes
      {
        path: 'adminHome',
        element: <AdminHome></AdminHome>
      },
      {
        path: 'manageUser',
        element: <ManageUsers></ManageUsers>
      },
      {
        path: 'manageTask',
        element: <ManageTask></ManageTask>
      }
    ]
  },
]);

export default router;
