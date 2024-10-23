import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../componets/assets/logo.png'


const myapp = () => {
  return (
    <navbar>
    <header className="header">
    <img src={logo} alt="Logo" className='logo' />
      <h1> My Website</h1>
    </header>
    <div className='side-bar'>
      <div>
       <Link to="/Post">Post</Link>
       </div>
        
        <div>
          <Link to="/Get">Get</Link>
        </div>
        <div>
         <Link to="/Update">Update</Link>
        </div>
        <div>
        <Link to="/Delete">Delete</Link>
        </div>
        <div>
        <Link to="/GetByid">GetByid</Link>
        </div>
      </div>
   </navbar>
);
};
export default myapp






