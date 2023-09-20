import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import WishlistPage from "../pages/WishlistPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
    ],
  },
]);
