import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../src/css/Profil.css';
import NavLog from './compo/NavLog';



function Profil() {
    const [users, setUsers] = useState([])



    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    },[])

    const handleDelete = (id) =>{
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res=> {console.log(res)
        window.location.reload()})
        .catch(errr => console.log(errr))
    }

  return (


    <div className="home">
        <NavLog/>
    
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>


        
            
        
        <div className="w-50 bg-white rounded p-3">
            
            <table className='table'>
                <thead>
                    <tr>
                        <th>Votre Nom</th>
                        <th>Votre Email</th>
                        <th>Votre Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) =>{
                           return <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                        })
                    

                    }
                </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}

export default Profil;