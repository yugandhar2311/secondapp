import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Post.css';

export default function Post() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [lastName, setLastName] = useState('');
  
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
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("http://3.110.164.111:3000/create", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        alert('User created successfully!');
        navigate('/get'); 
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to create user. Please try again.');
      });
  };

  return (
    <div className='post-container' style={{marginTop: '-550px'}}>
      <div className='post-form'>
        <h2>Create User</h2>
        <form onSubmit={mydata}>
          <div className='form-group'>
            <label htmlFor='firstname'>First Name:</label>
            <input
              type='text'
              id='firstname'
              name='firstname'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
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
              required
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
              required
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
              required
            />
          </div>
          
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}
