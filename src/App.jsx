import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root/RootLayout";
import SneakerDetailsPage from "./pages/Sneaker/SneakerDetails";
import "./styles/_main.scss";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
