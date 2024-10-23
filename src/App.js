import React from 'react';
import Navbar from './componets/Navbar'
import { Route, Routes } from 'react-router-dom';
import Post from './componets/pages/Post'
import Update from './componets/pages/Update'
import Get from './componets/pages/Get'
import Delete from './componets/pages/Delete'
import GetByid from './componets/pages/GetByid'



function myapp() {
  return (
    <div className="App">
      <Navbar />
      <sidebar />
      <Routes>
       <Route path="/Post" element={<Post />} />
        <Route path="/Get" element={<Get/>} />
        <Route path="/Update" element={<Update/>} />
        <Route path="/Delete" element={<Delete/>} />
        <Route path="/GetByid" element={<GetByid />} />
        
      </Routes>
      </div>

  );
}

export default myapp
