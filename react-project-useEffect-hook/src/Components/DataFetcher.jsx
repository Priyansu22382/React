import React, { useEffect, useState } from 'react';
import './DataFetcher.css';

const DataFetcher = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const responseData = await response.json();
        setData(data => responseData); 
        setLoading(false);
      } catch (error) {
        console.error("Error Fetching Data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []); 

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul className='data-fetcher'>
          {data.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
