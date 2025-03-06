import React from 'react';
import styles from './DetailsComponent.module.css';

interface Item {
  id: number;
  name: string;
  description: string;
}

interface DetailsComponentProps {
  item: Item | null;
}

function DetailsComponent({ item }: DetailsComponentProps) {
  if (!item) {
    return <p>No item selected</p>;
  }

  return (
    <div className={styles.detailsContainer}>
      <h3 className={styles.itemName}>{item.name}</h3>
      <p className={styles.itemDescription}>{item.description}</p>
      <div className={styles.itemMeta}>
        <span className={styles.itemId}>ID: {item.id}</span>
      </div>
    </div>
  );
}

export default DetailsComponent;
