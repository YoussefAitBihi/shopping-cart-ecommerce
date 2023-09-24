import PrimaryHeader from "../../components/Layout/PrimaryHeader";
import { Outlet, useParams, useNavigation } from "react-router-dom";
import Spinner from "../../components/UI/Spinner";

const RootLayout = () => {
  const params = useParams();
  const navigation = useNavigation();
  let className = "main-content";

  if (params.id) {
    className += " main-content--sneaker-page";
  }

  return (
    <>
      <PrimaryHeader />
      {navigation.state === "loading" && <Spinner />}
      <main className={className}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
