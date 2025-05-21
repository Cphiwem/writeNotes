import "./CartCard.css";

export const CartCard = ({ product }) => {
  const { name, price, image } = product;

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>R{price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};
