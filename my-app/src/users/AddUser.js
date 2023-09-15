import React, { useState } from "react";
import "../users/AddUser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function AddUser() {

    let navigate=useNavigate()

  const [user, setUser] = useState({
    id: "",
    name: "",
    age: "",
    address: "",
  });

  const { id, name, age, address } = user;

  const onInputChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  };

  const onSubmit= async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8040/insert",user)
    navigate("/")
    

  }
  return (
    <div className="adduser">
      <div className="form">
        <h2>Register User</h2>
        <form onSubmit={(e)=>onSubmit(e)}>
        <label htmlFor="Id">Id</label>
        <br />
        <input
          className="inputfield"
          type="text"
          placeholder="Enter id"
          name="id"
          value={id}
          onChange={(e)=>onInputChange(e)}
        />
        <br />
        <label htmlFor="Name">Name</label>
        <br />
        <input
          className="inputfield"
          type="text"
          placeholder="Enter Your Name"
          name="name"
          value={name}
          onChange={(e)=>onInputChange(e)}
        />
        <br />
        <label htmlFor="Age">Age</label>
        <br />
        <input
          className="inputfield"
          type="text"
          placeholder="Enter Your Age"
          name="age"
          value={age}
          onChange={(e)=>onInputChange(e)}
        />
        <br />
        <label htmlFor="Address">Address</label>
        <br />
        <input
          className="inputfield"
          type="text"
          placeholder="Enter Your Address"
          name="address"
          value={address}
          onChange={(e)=>onInputChange(e)}
        />
        <br />
        <br />
        <div className="btndiv">
          <button>SUBMIT</button>
          <Link className="btncancel" to="/">CANCEL</Link>
        </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
