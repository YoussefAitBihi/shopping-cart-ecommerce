import PrimaryHeader from "../../components/Layout/PrimaryHeader";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <PrimaryHeader />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
