import React, { useState } from 'react';
import ListComponent from './ListComponent';
import DetailsComponent from './DetailsComponent';
import styles from './HomePage.module.css';
import computerPartsData from '../data/ComputerPartsData_code.json';

interface Item {
  id: number;
  name: string;
  description: string;
}

function HomePage() {
  // State management for list items and selected item using computer parts data
  const [items, setItems] = useState<Item[]>(computerPartsData);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

// rendering the components

  // Handler for selecting an item
  const handleSelectItem = (item: Item) => {
    setSelectedItem(item);
  };

  // Handler for filtering items
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Handler for adding a new item
  const handleAddItem = (newItem: Omit<Item, 'id'>) => {
    setItems([...items, { ...newItem, id: items.length + 1 }]);
  };

  // Filter items based on search term
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.homePage}>
      <header className={styles.header}>
        <h1>Computer Parts Catalog</h1>
        <p>Browse our selection of high-quality computer components</p>
      </header>
      
      <main className={styles.mainContent}>
        <div className={styles.listSection}>
          <h2>Computer Parts</h2>
          <input
            type="text"
            placeholder="Search parts..."
            value={searchTerm}
            onChange={handleSearch}
            className={styles.searchInput}
          />
          <ListComponent 
            items={filteredItems} 
            onSelectItem={handleSelectItem}
            onAddItem={handleAddItem}
          />
        </div>
        
        <div className={styles.detailsSection}>
          <h2>Part Details</h2>
          {selectedItem ? (
            <DetailsComponent item={selectedItem} />
          ) : (
            <p>Select a computer part to view its details</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
