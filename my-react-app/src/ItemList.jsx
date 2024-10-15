import { useState } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import {addItem, updateItem, deleteItem} from './slice/itemSlice';


export default function itemList() {

  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  const [newItem,setNewItem] = useState('');
  const [editingItemId, setEditingItemId] = useState(null);
  const [updatedItemText, setUpdatedItemText] = useState('');

  const handleAdd = () => {
    dispatch(addItem({ id: Date.now(), name: newItem })); // Dispatch add item action
    setNewItem('');
  };

  const handleUpdate = (id) => {
    dispatch(updateItem({ id, name: updatedItemText }));
    setEditingItemId(null);
    setUpdatedItemText('');
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id)); // Dispatch delete item action
  };

  return (
    <div>
      <h2>Item List</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="New Item"
      />
      <button onClick={handleAdd}>Add Item</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {editingItemId === item.id ? (
              <div>
                <input type="text" value={updatedItemText}
                  onChange={(e) => setUpdatedItemText(e.target.value)}
                />
                <button onClick={() => handleUpdate(item.id)}>Update</button>
              </div>
            ) : (
              <div>
                {item.name}
                <button onClick={() => setEditingItemId(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
