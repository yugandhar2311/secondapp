import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Update.css';

export default function Update() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState(''); 
   
  const navigate = useNavigate(); 

  const mydata = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": email,
      "firstName": firstName,
      "lastName": lastName,
      "phone": phone
    });

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://3.110.164.111:3000/update/66e13871d8dc429d3c568c52", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        
        alert('User updated successfully!');
        navigate('/get');
      })
      .catch((error) => {
        console.error(error);
        
        alert('Failed to update user. Please try again.');
      });
  };

  return (
    <div className='Update-container' style={{marginTop: '-550px'}}>
      <h2>Update</h2>
      <form className='Update-form'>
        <div className='form-group'>
          <label htmlFor='firstname'>First Name:</label>
          <input
            type='text'
            id='firstname'
            name='firstname'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='lastname'>Last Name:</label>
          <input
            type='text'
            id='lastname'
            name='lastname'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone:</label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type='button' onClick={mydata}>Submit</button>
      </form>

      {message && (
        <div className='alert'>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}



