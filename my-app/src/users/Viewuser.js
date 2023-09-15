import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import '../users/viewuser.css'

function Viewuser() {
    const [user,setUser]=useState({
        name:"",
        age:"",
        address:""
    });

    const {id}=useParams();

    useEffect(()=>{
        loadUser()
    },[]);

    const loadUser=async ()=>{
        const result=await axios.get(`http://localhost:8040/get/${id}`)
        console.log(result)
        setUser(result.data)
    };
  return (
    
    <div className='viewu'>
    <div>
      <div><h2>USER DETAILS  {user.id}</h2>
      <ul className='ul'>
      <li><b>ID : </b>
        {user.id}
        </li>
        <li><b>name: </b>
        {user.name}
        </li>
        <li><b>age: </b>
        {user.age}
        </li>
        <li><b>address: </b>
        {user.address}
        </li>
       
      </ul><br />
      <Link className='link' to="/">BACK TO HOME</Link>
      </div>
    </div>
    </div>
  )
}

export default Viewuser
