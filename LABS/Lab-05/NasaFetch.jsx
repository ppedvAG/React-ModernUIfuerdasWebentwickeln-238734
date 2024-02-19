import React, { useState, useEffect } from 'react';

export function NasaFetch() {
  const [curiosityData, setCuriosityData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY_HERE",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setCuriosityData(await response.json());
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Curiosity Fetcher</h1>
      <div>{JSON.stringify(curiosityData, null, 2)}</div>
      {console.log(curiosityData)}
      <img src={curiosityData?.url} alt="NASA" />
    </div>
  );
}