import { useLoaderData, json } from "react-router-dom";
import { createPortal } from "react-dom";
import SneakerCarousel from "../../components/Sneaker/SneakerItem/SneakerCarousel";
import SneakerDetails from "../../components/Sneaker/SneakerItem/SneakerDetails";
import BackButton from "../../components/UI/BackButton";
import { supabase } from "../../lib/api";

const SneakerDetailsPage = () => {
  const [sneaker] = useLoaderData();

  return (
    <>
      {createPortal(<BackButton />, document.getElementById("back"))}
      <article className="article-sneaker flow">
        <SneakerCarousel carousel={sneaker.images} />
        <SneakerDetails sneaker={sneaker} />
      </article>
    </>
  );
};

export default SneakerDetailsPage;

export const loader = async ({ request, params }) => {
  const { id } = params;
  const { data: sneaker, error } = await supabase
    .from("products")
    .select("*, images (*)")
    .eq("id", id);

  if (error) throw json({ message: "Couldn't fetch sneaker" }, { status: 500 });

  return sneaker;
};
