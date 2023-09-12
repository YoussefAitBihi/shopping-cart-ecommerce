const SneakerPrice = () => {
  return (
    <div className="sneaker-price">
      <div className="sneaker-price__actual">
        <span className="sr-only">Discounted Price</span>
        <span>$120.00</span>
      </div>
      <div className="sneaker-price__discount">
        <span className="sr-only">Discount Percent</span>
        <span>50%</span>
      </div>
      <div className="sneaker-price__old">
        <span className="sr-only">Old Price</span>
        <span>$250.00</span>
      </div>
    </div>
  );
};

export default SneakerPrice;
