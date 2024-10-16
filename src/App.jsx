import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";
import Order from "./features/order/Order";
import MenuLayout from "./features/menu/MenuLayout";
import Cart from "./features/cart/Cart";
import OrderDetails from "./features/order/OrderDetails";
import PizzaMenu, { loader as getPizzas } from "./features/menu/PizzaMenu";
import DesertMenu, { loader as getDesserts } from "./features/menu/DesertMenu";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <MenuLayout />,
        children: [
          {
            index: true,
            element: <Navigate replace to="pizza" />,
          },
          {
            path: "pizza",
            element: <PizzaMenu />,
            loader: getPizzas,
          },
          {
            path: "desert",
            element: <DesertMenu />,
            loader: getDesserts,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/order/details",
        element: <OrderDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
