const SneakerPrice = ({ price, discount }) => {
  const formattedOriginalPrice = `$${price.toFixed(2)}`;
  const formattedDiscountPrice = `$${(price - (price * discount) / 100).toFixed(
    2
  )}`;
  return (
    <div className="sneaker-price">
      <p className="sneaker-price__actual">
        <span className="sr-only">Discount Price: </span>
        <ins>{formattedDiscountPrice}</ins>
      </p>
      <p className="sneaker-price__discount">
        <span className="sr-only">Discount Percent: </span>
        <span>50%</span>
      </p>
      <p className="sneaker-price__old">
        <span className="sr-only">Original Price: </span>
        <del>{formattedOriginalPrice}</del>
      </p>
    </div>
  );
};

export default SneakerPrice;

// <s></s> renders text with a strikethrough but it is not appropriate when indicating document edits.
