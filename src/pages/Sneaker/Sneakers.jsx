import { json, useLoaderData } from "react-router-dom";
import SneakerItem from "../../components/Sneaker/SneakerItem/SneakerItem";
import { firestoreURL } from "../../config/firebase";

// TODO: Load sneakers using loader
// TODO: Load a spinner when we load sneakers
// TODO: Handle errors

const SneakersPage = () => {
  // Load Data
  const { documents: sneakers } = useLoaderData();

  const transformedSneakers = sneakers.map((sneaker) => {
    return {
      id: Object.values(sneaker.fields.id)[0],
      title: Object.values(sneaker.fields.title)[0],
      price: Object.values(sneaker.fields.price)[0],
      thumbnail: Object.values(sneaker.fields.thumbnail)[0],
      description: Object.values(sneaker.fields.description)[0],
      discount: Object.values(sneaker.fields.discount)[0],
    };
  });

  return (
    <ul className="sneakers-list" role="list">
      {transformedSneakers.map((sneaker) => (
        <SneakerItem item={sneaker} key={sneaker.id} />
      ))}
    </ul>
  );
};

export default SneakersPage;

export const loader = async () => {
  const response = await fetch(`${firestoreURL}/product`);

  if (!response.ok)
    throw json({ message: "Couldn't retrieve products" }, { status: 500 });

  return response;
};

// In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls to pure functions and returning the cached result when the same inputs occur again.
