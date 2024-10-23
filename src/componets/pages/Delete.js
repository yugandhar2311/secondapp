import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Delete.css';

export default function Delete() {
  const [searchValue, setSearchValue] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const mydata = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://3.110.164.111:3000/destroy/${searchValue}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(`Network response was not ok. Status: ${response.status}. Response: ${text}`);
          });
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setMessage('Item deleted successfully!');
        setTimeout(() => {
          navigate('/get'); 
        }, 2000); 
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        setMessage('Failed to delete item. Please try again.');
      });
  };

  return (
    <div className='delete-container' style={{ marginTop: '-550px' }}>
      <h2>Delete</h2>
      <div className='form-group'>
        <label htmlFor='search'>Search:</label>
        <input
          type='text'
          id='search'
          name='search'
          placeholder='Enter ID to delete...'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <button type='button' onClick={mydata}>Submit</button>
      {message && (
        <div className='message'>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}







