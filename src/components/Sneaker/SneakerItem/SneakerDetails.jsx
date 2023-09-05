import SneakerItemForm from "./SneakerItemForm";

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
      <div className="sneaker-details__price-box">
        <div className="sneaker-details__actual-price">
          <span className="sr-only">Discounted Price</span>
          <span>$120.00</span>
        </div>
        <div className="sneaker-details__discount-percent">
          <span className="sr-only">Discount Percent</span>
          <span>50%</span>
        </div>
        <div className="sneaker-details__old-price">
          <span className="sr-only">Old Price</span>
          <span>$250.00</span>
        </div>
      </div>
      <SneakerItemForm />
    </div>
  );
};

export default SneakerDetails;
