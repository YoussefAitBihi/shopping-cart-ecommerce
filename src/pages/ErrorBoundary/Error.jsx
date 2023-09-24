import { useRouteError } from "react-router-dom";
import PrimaryHeader from "../../components/layout/PrimaryHeader";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred";
  let message = "Something went wrong";

  // To differentiate between 404 error and 500 error
  if (error.status === 500) {
    message = "We're having trouble fetching data";
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Couldn't find this page";
  }

  return (
    <>
      <PrimaryHeader />
      <main className="error-boundary">
        <h1 className="error-boundary__heading">{title}</h1>
        <p className="error-boundary__description">{message}</p>
      </main>
    </>
  );
};

export default ErrorPage;
