// import './App.css';
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import Viewuser from "./users/Viewuser";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/adduser" element={<AddUser/>} />
      <Route path="/editUser/:id" element={<EditUser/>} />
      <Route path="/view/:id" element={<Viewuser/>} />
    </Routes>
    
    </BrowserRouter>
    
   
  );
}

export default App;
