import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';



function CreateUser() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser",{name,email,age})
    .then(result => {
      console.log(result)
      navigate('/')
    })
    .catch(err=> console.log(err))
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className="w-50 bg-white rounded p-3">

          <form onSubmit={Submit}>
            <h2>Add User</h2>
            <div className="mb-2">
              <label htmlFor="">Nom</label>
              <input type="text" placeholder='Entrez Votre Nom' className='form-control' 
              onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="mb-2">
              <label htmlFor="">Email</label>
              <input type="text" placeholder='Entrez Votre Email' className='form-control' 
              onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="mb-2">
              <label htmlFor="">Age</label>
              <input type="text" placeholder='Entrez Votre Age' className='form-control' 
              onChange={(e) => setAge(e.target.value)}/>
            </div>
            <Link to="/users" className='btn btn-success'>Confirmer</Link>
          </form>
        </div>
    </div>
  )
}

export default CreateUser;