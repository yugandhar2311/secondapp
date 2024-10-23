import React, { useState, useEffect } from 'react';
import './Get.css'; 

export default function Get() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    feachdata() 
   
  }, []);

  const feachdata = async () => {
   await fetch("http://3.110.164.111:3000/findAll")
    .then((response)  => {
      console.log("response",response)
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('404: Not Found - The requested resource could not be found.');
        } else if (response.status === 500) {
          throw new Error('500: Internal Server Error - Something went wrong on the server.');
        } else {
          throw new Error(`Unexpected status code: ${response.status}`);
        }
      }
      return response.json();
    })
    .then((result) => {
      setData(result);
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
      setMessage(`Failed to fetch data: ${error.message}`);
    });
  }

  return (
    <div className='table-container' style={{ marginTop: '-550px' }}>
      <h2>User List</h2>
      {message && (
        <div className='message'>
          <p>{message}</p>
        </div>
      )}
      <table className='data-table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>No users available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  function handleUpdate(id) {
    console.log('Update user with ID:', id);
  }

  function handleDelete(id) {
    console.log('Delete user with ID:', id);
  }
}

