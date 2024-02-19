import React from 'react';
import { Form } from './Form';
import { FormFluent } from './FormFluent';

function App() {
  return (
    <div className="App">
      <h2>React Hook Form</h2>
      <Form />
      <hr />
      <h2>Fluent UI Form</h2>
      <FormFluent />
    </div>
  );
}

export default App;