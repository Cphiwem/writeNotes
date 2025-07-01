import { useEffect, useState } from "react";
import { DashbaordCard } from "./components/DashbaordCard";
import { DashbaordEmpty } from "./components/DashbaordEmpty";
import { getUserOrder } from "../../services";
import { useTitles } from "../../hooks/useTitles";
import { toast } from "react-toastify";

export const DashbaordPage = () => {
  const [orders, setOrders] = useState([]);
  useTitles("Dashboard");

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getUserOrder();
        setOrders(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          closeOnClick: true,
          position: "bottom-center",
        });
      }
    }
    fetchOrders();
  }, []);

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>

      <section>
        {orders.length &&
          orders.map((order) => <DashbaordCard key={order.id} order={order} />)}
      </section>

      <section>{!orders.length && <DashbaordEmpty />}</section>
    </main>
  );
};
