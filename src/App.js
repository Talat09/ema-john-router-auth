import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import LogIn from "./components/LogIn/LogIn";
import Orders from "./components/Orders/Orders";
import Shipping from "./components/Shipping/Shipping";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";
import Main from "./layout/Main";
import { productsAndCartLoader } from "./loaders/ProductsAndCartLoader";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "/inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "/shipping",
          element: (
            <PrivateRoutes>
              <Shipping></Shipping>
            </PrivateRoutes>
          ),
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "/login",
          element: <LogIn></LogIn>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
