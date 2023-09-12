import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root/RootLayout";
import SneakerDetailsPage from "./pages/Sneaker/SneakerDetails";
import "./styles/_main.scss";
import SneakersPage from "./pages/Sneaker/Sneakers";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "sneaker",
          element: <SneakerDetailsPage />,
        },
        {
          path: "sneakers",
          element: <SneakersPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

// Where to portal that element
// Portal it
