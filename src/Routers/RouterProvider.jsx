import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import LogIn from "../auth/LogIn";
import Register from "./Register";
import AllCamign from "../pages/AllCamign";
import AddCap from "../pages/AddCap";
import MyCamo from "../pages/MyCamo";
import MyDonation from "../pages/MyDonation";
import Privete from "./Privete";

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
        loader: () => fetch("http://localhost:5000/donations"),
      },
      {
        path: "/donation/add-campagion",
        element: (
          <Privete>
            <AddCap></AddCap>
          </Privete>
        ),
      },
      {
        path: "/donation/my-donation",
        element: (
          <Privete>
            <MyDonation></MyDonation>
          </Privete>
        ),
      },
      {
        path: "/donation/my-campagion",
        element: (
          <Privete>
            <MyCamo></MyCamo>
          </Privete>
        ),
      },
    ],
  },
]);

export default router;
