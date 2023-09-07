import './InventoryListItem.css';

export default function InventoryListItem({ inventoryItem, handleAddToOrder }) {
  return (
    <div className="InventoryListItem">
      <div className="image flex-ctr-ctr">{inventoryItem.image}</div>
      <div className="name">{inventoryItem.name}</div>
      <div className="buy">
        <span>${inventoryItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(inventoryItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}