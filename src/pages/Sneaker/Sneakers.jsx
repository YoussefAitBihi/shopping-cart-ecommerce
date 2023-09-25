import { json, useLoaderData } from "react-router-dom";
import SneakerItem from "../../components/Sneaker/SneakerItem/SneakerItem";
import { supabase } from "../../lib/api";

const SneakersPage = () => {
  // Load Data
  const sneakers = useLoaderData();

  return (
    <ul className="sneakers-list" role="list">
      {sneakers.map((sneaker) => (
        <SneakerItem item={sneaker} key={sneaker.id} />
      ))}
    </ul>
  );
};

export default SneakersPage;

export const loader = async () => {
  const { data: sneakers, error } = await supabase.from("products").select();

  if (error) {
    throw json({ message: error.message }, { status: 500 });
  }

  return sneakers;
};

// In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls to pure functions and returning the cached result when the same inputs occur again.
