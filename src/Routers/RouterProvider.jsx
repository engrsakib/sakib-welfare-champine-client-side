import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import LogIn from "../auth/LogIn";
import Register from "./Register";
import AllCamign from "../pages/AllCamign";
import AddCap from "../pages/AddCap";
import MyCamo from "../pages/MyCamo";
import MyDonation from "../pages/MyDonation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/auth/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/donation/all-campagion",
        element: <AllCamign></AllCamign>,
      },
      {
        path: "/donation/add-campagion",
        element: <AddCap></AddCap>,
      },
      {
        path: "/donation/my-donation",
        element: <MyDonation></MyDonation>,
      },
      {
        path: "/donation/my-campagion",
        element: <MyCamo></MyCamo>,
      },
    ],
  },
]);

export default router;
