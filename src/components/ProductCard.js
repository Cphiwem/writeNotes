import "./ProductCard.css";
export const ProductCard = ({ product }) => {
  const { id, name, price, image } = product;
  return (
    <div className="product">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>R{price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};
