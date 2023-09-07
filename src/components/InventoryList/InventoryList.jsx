import './InventoryList.css';
import InventoryListItem from '../InventoryListItem/InventoryListItem';

export default function InventoryList({ inventoryItems, handleAddToOrder }) {
  const items = inventoryItems.map(item =>
    <InventoryListItem
      key={item._id}
      inventoryItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="InventoryList">
      {items}
    </main>
  );
}