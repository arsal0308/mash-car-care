import './InventoryListItem.css';

export default function InventoryListItem({ inventoryItem, handleAddToOrder }) {
  console.log(inventoryItem);
  return (
    <div className="InventoryListItem">
      <img className="image flex-ctr-ctr" src={inventoryItem.image} alt="" />
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