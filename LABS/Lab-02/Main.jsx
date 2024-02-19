import React, { useState } from 'react';
import { DynamicList } from './DynamicList';

export function Main(props) {
  const [newItems, setNewItems] = useState(props.array);

  return (
    <div>
      <h1>Was ich heute noch mache</h1>
      <DynamicList items={newItems} />
      <button onClick={() => setNewItems(props.array)}>Klick mich</button>
    </div>
  );
}