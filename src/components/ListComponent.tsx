import React, { useState } from 'react';
import styles from './ListComponent.module.css';

interface Item {
  id: number;
  name: string;
  description: string;
}

interface ListComponentProps {
  items: Item[];
  onSelectItem: (item: Item) => void;
  onAddItem: (newItem: Omit<Item, 'id'>) => void;
}

function ListComponent({ items, onSelectItem, onAddItem }: ListComponentProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemDescription, setNewItemDescription] = useState('');
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleItemClick = (item: Item) => {
    setSelectedItemId(item.id);
    onSelectItem(item);
  };

  const handleAddNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItemName && newItemDescription) {
      onAddItem({
        name: newItemName,
        description: newItemDescription
      });
      setNewItemName('');
      setNewItemDescription('');
      setShowAddForm(false);
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);
    }
  };

  return (
    <div className={styles.listContainer}>
      {/* Conditional rendering #1: Show message when no items are found */}
      {items.length === 0 ? (
        <div className={styles.emptyMessage}>No items found</div>
      ) : (
        <ul className={styles.itemsList}>
          {items.map(item => (
            <li 
              key={item.id}
              onClick={() => handleItemClick(item)}
              /* Conditional rendering #2: Apply different styles to selected item */
              className={`${styles.itemCard} ${selectedItemId === item.id ? styles.selectedItem : ''}`}
            >
              <h3>{item.name}</h3>
              {/* Removed description preview */}
            </li>
          ))}
        </ul>
      )}

      {/* Conditional rendering #3: Toggle add item form visibility */}
      {!showAddForm ? (
        <button 
          className={styles.addButton}
          onClick={() => setShowAddForm(true)}
        >
          Add New Part
        </button>
      ) : (
        <form onSubmit={handleAddNewItem} className={styles.addForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={newItemName}
              onChange={e => setNewItemName(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={newItemDescription}
              onChange={e => setNewItemDescription(e.target.value)}
              required
            />
          </div>
          <div className={styles.formActions}>
            <button type="submit" className={styles.submitButton}>Save</button>
            <button 
              type="button" 
              className={styles.cancelButton}
              onClick={() => setShowAddForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Conditional rendering #4: Show confirmation message after adding item */}
      {showConfirmation && (
        <div className={styles.confirmationMessage}>
          Part added successfully!
        </div>
      )}
    </div>
  );
}

export default ListComponent;
