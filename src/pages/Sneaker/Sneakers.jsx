import { useState, useEffect, useCallback } from "react";
import SneakerItem from "../../components/Sneaker/SneakerItem/SneakerItem";
import Spinner from "../../components/UI/Spinner";

// Create a spinner loading

// Create a loader which loads all sneakers
// Manage Errors Responses
// Manage Loading State

// Create a loader which loads a specific sneaker with carousel
// Create a useHttp hook

const SneakersPage = () => {
  const [sneakersState, setSneakersState] = useState({
    sneakers: [],
    isLoading: null,
    errorMessage: "",
  });

  const fetchSneakers = useCallback(async () => {
    setSneakersState((prevSneakersState) => {
      return {
        ...prevSneakersState,
        isLoading: true,
      };
    });

    const response = await fetch(
      "https://shopping-cart-ecommerce-default-rtdb.firebaseio.com/shopping/sneakers.json"
    );

    if (!response.ok) {
      throw new Response(
        JSON.stringify({ message: "Couldn't fetch sneakers" }),
        { status: 500 }
      );
    }

    const data = await response.json();

    let transformedSneakers = [];
    for (const key in data) {
      transformedSneakers.push(data[key]);
    }

    setSneakersState((prevSneakersState) => {
      return {
        ...prevSneakersState,
        sneakers: [...transformedSneakers],
        isLoading: false,
      };
    });
  }, []);

  useEffect(() => {
    fetchSneakers();
  }, [fetchSneakers]);

  let sneakersContent;
  if (sneakersState.isLoading) {
    sneakersContent = <Spinner />;
  }

  if (sneakersState.isLoading === false) {
    sneakersContent = sneakersState.sneakers.map((sneaker) => {
      return (
        <li key={sneaker.id}>
          <SneakerItem item={sneaker} />
        </li>
      );
    });
  }

  return (
    <ul className="sneakers-list" role="list">
      {sneakersContent}
    </ul>
  );
};

export default SneakersPage;
