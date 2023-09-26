const SneakerPrice = ({ originalPrice, discountedPrice, discount }) => {
  const formattedOriginalPrice = `$${originalPrice}`;
  const formattedDiscountPrice = `$${discountedPrice}`;

  // console.log(formattedDiscountPrice);
  return (
    <div className="sneaker-price">
      <p className="sneaker-price__actual">
        <span className="sr-only">Discount Price: </span>
        <ins>{formattedDiscountPrice}</ins>
      </p>
      <p className="sneaker-price__discount">
        <span className="sr-only">Discount Percent: </span>
        <span>{`${discount}%`}</span>
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
