import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from "../../utilities/items-api"; 

export default function NewOrderPage() {
  const [storeItems, setStoreItems] = useState([]);
  const categoriesRef = useRef([]);

  useEffect(function() {
    async function getItems() {
      const items = await itemsAPI.getAll();
      console.log(items);
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setStoreItems(items);
    }
    getItems();
  }, []);

    return (
    <h1>NewOrderPage</h1>
    );
}