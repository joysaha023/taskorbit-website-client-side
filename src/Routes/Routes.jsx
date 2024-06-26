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
import PrivateRoutes from "./PrivateRoutes";
import Contact from "../Pages/Contact/Contact";
import Taskupdate from "../Pages/Dashboard/Taskupdate/Taskupdate";
import JobDetails from "../Pages/Dashboard/JobDetails/JobDetails";
import ErrorPage from "../Pages/ErroPage/ErrorPage";
import Payment from "../Pages/Dashboard/Payment/Payment";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <TaskList></TaskList>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
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
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
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
      {
        path: 'jobdetails/:id',
        element: <JobDetails></JobDetails>
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
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: 'taskUpdate/:id',
        element: <Taskupdate></Taskupdate>
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
