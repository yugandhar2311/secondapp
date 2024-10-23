import React, { useState } from 'react';
import './GetByid.css';

export default function GetByid() {
  const [searchValue, setSearchValue] = useState(''); 
  const [result, setResult] = useState(null); 
  const [message, setMessage] = useState(''); 

  const fetchData = (e) => {
    e.preventDefault(); 

    fetch(`http://3.110.164.111:3000/findOne/${searchValue}`) 
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(`Network response was not ok. Status: ${response.status}. Response: ${text}`);
          });
        }
        return response.json(); 
      })
      .then((data) => {
        console.log(data);
        setResult(data);
        setMessage('Data retrieved successfully!');
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        setMessage('Failed to retrieve data. Please try again.');
        setResult(null); 
      });
  };

  return (
    <div className='GetByid-container' style={{ marginTop: '-550px' }}>
      <h2>Get By ID</h2>
      <div className='form-group'>
        <label htmlFor='search'>Search:</label>
        <input
          type='text'
          id='search'
          name='search'
          placeholder='Enter ID to fetch...'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)} 
        />
      </div>
      
      <button className='submit-btn' type='button' onClick={fetchData}>Submit</button> 
      
   
      {message && (
        <div className='message'>
          <p>{message}</p>
        </div>
      )}
      
      
      {result && (
        <div className='result'>
          <h3>Data:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}