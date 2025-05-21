import { ProductCard } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Home = () => {
  useTitle("Home");
  const products = [
    {
      id: 1,
      name: "Sony Bluetooth Eireless",
      price: 159,
      image: "assets/images/1001.png",
    },
    {
      id: 2,
      name: "Sony Bluetooth Eireless",
      price: 871,
      image: "assets/images/1002.png",
    },
    {
      id: 3,
      name: "Sony Bluetooth Eireless",
      price: 108,
      image: "assets/images/1003.png",
    },
    {
      id: 4,
      name: "Sony Bluetooth Eireless",
      price: 300,
      image: "assets/images/1004.png",
    },
    {
      id: 5,
      name: "Sony Bluetooth Eireless",
      price: 269,
      image: "assets/images/1005.png",
    },
    {
      id: 6,
      name: "Sony Bluetooth Eireless",
      price: 189,
      image: "assets/images/1006.png",
    },
  ];

  return (
    <main>
      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
