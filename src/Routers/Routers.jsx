import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PraivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/checkout/:id",
        element: <PraivateRoute><Checkout></Checkout></PraivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/bookings",
        element: <PraivateRoute><Bookings></Bookings></PraivateRoute>
      }
    ]
  },
]);

export default router;