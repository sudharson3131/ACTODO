import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useState } from "react";
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Landing from './pages/Landing';


function App(){

  const [users,setUsers] = useState(
     [
         {
             username:"sudan",
             password:"123",
         },
     ]
 )


  return(
     <div>
   <BrowserRouter>
   
   <Routes>
   <Route path='/' element={<Login users={users} setUsers={setUsers}/>} ></Route>
   <Route path='/signup' element={<SignUp users={users} setUsers={setUsers}/>} ></Route>
   <Route path='/landing' element={<Landing />} ></Route>
   </Routes>
   </BrowserRouter>
   
  
  </div>
  )
}

export default App