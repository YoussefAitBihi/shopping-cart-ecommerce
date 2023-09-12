import SneakerItemForm from "./SneakerItemForm";
import SneakerPrice from "./SneakerPrice";

const SneakerDetails = () => {
  return (
    <div className="sneaker-details flow">
      <header className="sneaker-details__header flow-small">
        <h2 className="sneaker-details__subtitle">Sneaker company</h2>
        <h1 className="sneaker-details__title">
          Fall limited edition sneakers
        </h1>
      </header>
      <p className="sneaker-details__description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <SneakerPrice />
      <SneakerItemForm />
    </div>
  );
};

export default SneakerDetails;
