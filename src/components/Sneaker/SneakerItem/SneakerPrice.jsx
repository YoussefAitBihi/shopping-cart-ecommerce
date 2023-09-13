const SneakerPrice = () => {
  return (
    <div className="sneaker-price">
      <div className="sneaker-price__actual">
        <span className="sr-only">Discounted Price</span>
        <ins>$120.00</ins>
      </div>
      <div className="sneaker-price__discount">
        <span className="sr-only">Discount Percent</span>
        <span>50%</span>
      </div>
      <div className="sneaker-price__old">
        <span className="sr-only">Old Price</span>
        <del>$250.00</del>
      </div>
    </div>
  );
};

export default SneakerPrice;

// <s></s> renders text with a strikethrough but it is not appropriate when indicating document edits.
