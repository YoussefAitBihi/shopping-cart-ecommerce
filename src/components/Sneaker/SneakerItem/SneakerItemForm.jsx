import PrimaryButton from "../../UI/PrimaryButton";
import CartIcon from "../../../assets/icon-cart.svg";
import PlusIcon from "../../../assets/icon-plus.svg";
import MinusIcon from "../../../assets/icon-minus.svg";

const SneakerItemForm = () => {
  return (
    <form className="form-sneaker flow-small">
      <div className="form-sneaker__group">
        <button type="button" className="form-sneaker__button">
          <span className="sr-only">Decrement the amount of sneaker</span>
          <img src={MinusIcon} alt="Minus Icon" aria-hidden="true" />
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
        <button type="button" className="form-sneaker__button">
          <span className="sr-only">Increment the amount of sneaker</span>
          <img src={PlusIcon} alt="Plus Icon" aria-hidden="true" />
        </button>
      </div>
      <PrimaryButton>
        <img
          src={CartIcon}
          alt="Cart Icon"
          className="primary-button__icon"
          aria-hidden="true"
        />
        <span>Add to cart</span>
      </PrimaryButton>
    </form>
  );
};

export default SneakerItemForm;
