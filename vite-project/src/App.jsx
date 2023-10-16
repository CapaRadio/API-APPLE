import { useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import Log from './Log';
import Home from './Home';
import LogAdmin from './LogAdmin';
import Profil from './Profil';
import HomeLog from './HomeLog';
// import Home2 from './compo/Home2';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
       <Routes>

          <Route path='/' element={<Home/>}></Route>
          <Route path='/Log' element={<Log/>}></Route>
          <Route path='/LogAdmin' element={<LogAdmin/>}></Route>
          <Route path='/Profil' element={<Profil/>}></Route>
          <Route path='/HomeLog' element={<HomeLog/>}></Route>
          <Route path='/users' element={<Users/>}></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/update/:id' element={<UpdateUser/>}></Route>
          
        </Routes>
      </BrowserRouter>

      </>

  )
}

export default App
