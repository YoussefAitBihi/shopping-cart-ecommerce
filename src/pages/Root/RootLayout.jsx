import PrimaryHeader from "../../components/Layout/PrimaryHeader";
import { Outlet, useParams } from "react-router-dom";

const RootLayout = () => {
  const params = useParams();
  let className = "main-content";

  if (params.id) {
    className += " main-content--sneaker-page";
  }

  return (
    <>
      <PrimaryHeader />
      <main className={className}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
