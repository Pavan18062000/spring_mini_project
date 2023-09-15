import React, { useEffect, useState } from "react";
import "../pages/Home.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [user, setuser] = useState([]);
  useEffect(() => {
    loaduser();
  }, []);

  const loaduser = async () => {
    const result = await axios.get("http://localhost:8040/getall");
   // console.log(result);
    setuser(result.data);
  };

  const deleteUser=async(id)=>{
    const result=await axios.delete(`http://localhost:8040/delete/${id}`)
    loaduser(); 
  }


  return (
    <div className="homediv">
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="headtable">ID</th>
              <th className="headtable"> NAME</th>
              <th className="headtable">AGE</th>
              <th className="headtable">ADDRESS</th>
              <th className="headtable">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user,i) => {
              return (
                <tr key={i}>
                  <td className="tds" >
                    {user.id}
                  </td>
                  <td className="tds" >{user.name}</td>
                  <td className="tds">{user.age}</td>
                  <td className="tds">{user.address}</td>
                  <td className="tds">
                   <button> <Link className="button" to={`/view/${user.id}`} >view</Link></button>
                   <button> <Link to={`editUser/${user.id}`} className="button">edit</Link></button>
                    <button className="button"
                    onClick={()=>deleteUser(user.id)}
                    >delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
