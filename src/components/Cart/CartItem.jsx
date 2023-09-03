import ImageProductThumbnail from "../../assets/image-product-1-thumbnail.jpg";
import TrashIcon from "../../assets/icon-delete.svg";

const CartItem = () => {
  return (
    <li className="cart-item">
      <div className="cart-item__image">
        <img src={ImageProductThumbnail} alt="Image Product Thumbnail" />
      </div>
      <div className="cart-item__middle">
        <h3 className="cart-item__title">Fall Limited Edition Sneakers</h3>
        <p className="cart-item__details">
          <span className="cart-item__price">$125.00 x 3</span>
          <strong className="cart-item__amount">$375.00</strong>
        </p>
      </div>
      <div className="cart-item__action">
        <img
          src={TrashIcon}
          alt="Trash Icon"
          className="cart-item__trash"
          aria-hidden="true"
        />
      </div>
    </li>
  );
};

export default CartItem;
