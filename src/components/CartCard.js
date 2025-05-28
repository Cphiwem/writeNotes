import { useCart } from "../context/CartContext";
import "./CartCard.css";

export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();
  const { name, price, image } = product;

  function handleDelete() {
    removeFromCart(product);
  }

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={handleDelete}>Remove</button>
    </div>
  );
};
