import React, { useEffect, useState } from "react";
import "../users/EditUser.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditUser() {
  const {id}=useParams();
  let navigate =useNavigate();
  const[user,setUser]=useState({
    id:"",
    name:"",
    age:"",
    address:""
  })

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }

  const{name,age,address}=user;

  useEffect (()=>{
    loadUser()
  },[])
  
 

  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.put("http://localhost:8040/update",user)
    navigate("/")
  }

 const loadUser=async()=>{
  const result=await axios.get(`http://localhost:8040/get/${id}`)
  //console.log(result)
  setUser(result.data)
 } 


 

  return (
    <div className="editdiv">
      <div className="form">
        <h2>EDIT USER</h2>
        <br />
        <form onSubmit={(e)=>onSubmit(e)}>
        {/* <label htmlFor="id">Id</label>
        <br />
        <input type="text" name="id" value={user.id} readOnly="true" className="inputfield"
         onChange={(e)=>onInputChange(e)}
        /> */}
        <br />
        <br />
        <label htmlFor="id">Name</label>
        <br />
        <input className="inputfield" type="text" name="name"  onChange={(e)=>onInputChange(e)}  value={user.name}/>
        <br />
        <br />
        <label htmlFor="id">Age</label>
        <br />
        <input className="inputfield" type="text" name="age"  onChange={(e)=>onInputChange(e)} value={user.age} />
        <br />
        <br />
        <label htmlFor="id">Address</label>
        <br />
        <input className="inputfield" type="text" name="address"  onChange={(e)=>onInputChange(e)}  value={user.address} />
        <br />
        <br />
        <button className="button">SUBMIT</button>
        <button><Link className="button" to="/">HOME</Link></button> 
        </form>
      </div>
    </div>
  );
}

export default EditUser;
