import React, { useState, useEffect } from 'react';
import * as ordersAPI from "../../utilities/orders-api";
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function OrderHistoryPage({ user, setUser }) {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    async function fetchOrderHistory() {
      try {
        const orders = await ordersAPI.getOrderHistory();
        setOrderHistory(orders);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    }

    fetchOrderHistory();
  }, []);

  return (
    <main className="OrderHistoryPage">
      <header>
        <h1>Order History</h1>
      </header>
      {orderHistory.map((order, index) => (
        <OrderDetail key={index} order={order} />
      ))}
      <UserLogOut user={user} setUser={setUser} />
    </main>
  );
}
