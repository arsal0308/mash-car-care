import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from "../../utilities/items-api"; 
import './NewOrderPage.css';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import InventoryList from '../../components/InventoryList/InventoryList';
import CategoryList from '../../components/CategoryList/CategoryList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function NewOrderPage({ user, setUser }) {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const categoriesRef = useRef([]);

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setInventoryItems(items);
      // setActiveCat(categoriesRef.current[0]);
    }
    getItems();
  }, [inventoryItems]);

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
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <InventoryList
        inventoryItems={inventoryItems.filter(item => item.category.name === activeCat)}
      />
      <OrderDetail />
    </main>
    );
}