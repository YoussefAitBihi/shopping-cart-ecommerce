import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root/RootLayout";
import SneakerDetailsPage from "./pages/Sneaker/SneakerDetails";
import "./styles/_main.scss";
import SneakersPage from "./pages/Sneaker/Sneakers";
import HomePage from "./pages/Home/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "sneakers",
          element: <SneakersPage />,
        },
        {
          path: "/sneakers/:id",
          element: <SneakerDetailsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
