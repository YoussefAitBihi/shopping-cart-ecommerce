import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root/RootLayout";
import SneakerDetailsPage from "./pages/Sneaker/SneakerDetails";
import "./styles/_main.scss";
import SneakersPage from "./pages/Sneaker/Sneakers";
import HomePage from "./pages/Home/Home";
import { loader as sneakersLoader } from "./pages/Sneaker/Sneakers";
import ErrorPage from "./pages/ErrorBoundary/Error";
import CartProvider from "./store/CartProvider";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "sneakers",
          element: <SneakersPage />,
          loader: sneakersLoader,
        },
        {
          path: "/sneakers/:id",
          element: <SneakerDetailsPage />,
          // loader: sneakerDetailsLoader,
        },
      ],
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
};

export default App;
