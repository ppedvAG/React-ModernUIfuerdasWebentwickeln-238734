import React from 'react';
import { ToDoListe } from './ToDoList';
import { DynamicList } from './DynamicList';
import { Blog } from './Blog';
import { Main } from './Main';

function App() {
  // Definiere die Daten für die Blog-Posts
  const posts = [
    { id: 1, title: 'Hallo Welt', content: 'Willkommen beim Lernen von React!' },
    { id: 2, title: 'Installation', content: 'Du kannst React via npm installieren.' }
  ];

  // Definiere die Liste von Aufgaben
  const items = [
    "React-Basics lernen",
    "Tests schreiben",
    "Serverseitig rendern",
  ];

  // Definiere ein alternatives Array von Aufgaben
  const array = [
    "schlafen",
    "ausruhen",
    "essen",
  ];

  return (
    <div className="App">
      {/* Render ToDoListe-Komponente mit statischen Daten */}
      <ToDoListe item1="Hallo" item2="Bergsteigen" item3="Blumen pflücken">ToDo</ToDoListe>
      <ToDoListe item1="Einkaufen" item2="Rasen mähen" item3="React">Done</ToDoListe>

      {/* Render DynamicList-Komponente mit dynamischen Daten */}
      <DynamicList items={items} />

      {/* Render Blog-Komponente mit den Blog-Posts */}
      <Blog posts={posts} />

      {/* Render Main-Komponente */}
      <Main array={array} />
    </div>
  );
}

export default App;