import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from "../../utilities/items-api"; 
import * as ordersAPI from "../../utilities/orders-api"; 
import './NewOrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import InventoryList from '../../components/InventoryList/InventoryList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setInventoryItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  async function handleAddToOrder(itemId) {
    const updatedCart = await ordersAPI.addItemToCart(itemId);
    setCart(updatedCart);
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }
  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate('/orders');
  }
 
    return (
      <main className="NewOrderPage">
      <aside>
        <Logo />
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
        <Link to="/contact" className="button btn-sm">CONTACT US</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <InventoryList
        inventoryItems={inventoryItems.filter(item => item.category.name === activeCat)}
        handleAddToOrder={handleAddToOrder}
        />
      <OrderDetail 
      order={cart}
      handleChangeQty={handleChangeQty}
      handleCheckout={handleCheckout}
      />
    </main>
    );
}