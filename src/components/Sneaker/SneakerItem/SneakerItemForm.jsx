import { useState } from "react";
import CartIcon from "../../Cart/CartIcon";
import PrimaryButton from "../../UI/PrimaryButton";

import MinusIcon from "./MinusIcon";
import PlusIcon from "./PlusIcon";

const SneakerItemForm = (props) => {
  const [amount, setAmount] = useState(1);

  const incrementAmountHandler = (event) => {
    event.preventDefault();
    if (amount === 10) return;

    setAmount((prevAmountState) => ++prevAmountState);
  };

  const decrementAmountHandler = (event) => {
    event.preventDefault();
    if (amount === 1) return;

    setAmount((prevAmountState) => --prevAmountState);
  };

  const submitAmountHandler = (event) => {
    event.preventDefault();

    props.onAddItem(amount);
  };

  return (
    <form className="form-sneaker flow-small" onSubmit={submitAmountHandler}>
      <div className="form-sneaker__group">
        <button
          type="button"
          className="form-sneaker__button form-sneaker__button--decrement"
          onClick={decrementAmountHandler}
        >
          <span className="sr-only">Decrement the amount of sneaker</span>
          <MinusIcon />
        </button>
        <input
          type="text"
          readOnly
          className="form-sneaker__amount"
          aria-label="The amount of sneaker"
          value={amount}
        />
        <button
          type="button"
          className="form-sneaker__button form-sneaker__button--increment"
          onClick={incrementAmountHandler}
        >
          <span className="sr-only">Increment the amount of sneaker</span>
          <PlusIcon />
        </button>
      </div>
      <PrimaryButton>
        <CartIcon className="primary-button__icon" />
        <span>Add to cart</span>
      </PrimaryButton>
    </form>
  );
};

export default SneakerItemForm;
