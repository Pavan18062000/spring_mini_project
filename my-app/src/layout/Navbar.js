import React from "react";
import "../layout/NavBar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="navbar">
          <p>Full Stack Application</p>
          <p>
            <Link className="link" to="/adduser">
              ADD USER
            </Link>
          </p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
