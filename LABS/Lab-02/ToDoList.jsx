import React from 'react';

export function ToDoListe(props) {
  return (
    <div>
      <h1>{props.children}</h1>
      <ul>
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
      </ul>
    </div>
  );
}