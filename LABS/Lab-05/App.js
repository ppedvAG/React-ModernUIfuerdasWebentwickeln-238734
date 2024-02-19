import React from 'react';
import NasaFetch from './NasaFetch';
import NasaUseFetch from './NasaUseFetch';
import NasaUseAxios from './NasaUseAxios';
import ReactQueryNasa from './ReactQueryNasa';

function App() {
  return (
    <div className="App">
      <h2>Fetch API</h2>
      <NasaFetch />
      <hr />
      <h2>Custom useFetch Hook</h2>
      <NasaUseFetch />
      <hr />
      <h2>Axios</h2>
      <NasaUseAxios />
      <hr />
      <h2>React Query</h2>
      <ReactQueryNasa />
    </div>
  );
}

export default App;