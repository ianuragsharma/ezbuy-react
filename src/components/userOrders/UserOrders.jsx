import { useOrder } from "../../contexts";
import "./userOrders.css";

const UserOrders = () => {
  const { orderState } = useOrder();
  const { orders } = orderState;
  if (orders.length === 0) return <div>No orders found</div>;
  return <div></div>;
};

export { UserOrders };
