import React from 'react';
import { useFetch } from './useFetch';

export function NasaUseAxios() {
  const curiosityData = useFetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity?api_key=YOUR_API_KEY_HERE");

  return (
    <div>
      <h1>Curiosity Fetcher</h1>
      <div>{JSON.stringify(curiosityData, null, 2)}</div>
    </div>
  );
}