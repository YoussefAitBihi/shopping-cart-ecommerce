import CartIcon from "../../Cart/CartIcon";
import PrimaryButton from "../../UI/PrimaryButton";

import MinusIcon from "./MinusIcon";
import PlusIcon from "./PlusIcon";

const SneakerItemForm = () => {
  return (
    <form className="form-sneaker flow-small">
      <div className="form-sneaker__group">
        <button
          type="button"
          className="form-sneaker__button form-sneaker__button--decrement"
        >
          <span className="sr-only">Decrement the amount of sneaker</span>
          <MinusIcon />
        </button>
        <input
          type="number"
          min="1"
          max="10"
          step="1"
          className="form-sneaker__amount"
          aria-label="The amount of sneaker"
          defaultValue="1"
        />
        <button
          type="button"
          className="form-sneaker__button form-sneaker__button--increment"
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
