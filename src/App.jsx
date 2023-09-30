import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root/RootLayout";
import SneakerDetailsPage, {
  loader as sneakerDetailsLoader,
} from "./pages/Sneaker/SneakerDetails";
import "./styles/_main.scss";
import HomePage from "./pages/Home/Home";
import SneakersPage, {
  loader as sneakersLoader,
} from "./pages/Sneaker/Sneakers";
import ErrorPage from "./pages/ErrorBoundary/Error";
import { Provider } from "react-redux";
import store from "./store/index";

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
          loader: sneakerDetailsLoader,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
