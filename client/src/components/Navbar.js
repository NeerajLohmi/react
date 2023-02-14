import React from "react";
import "./Navbar.css";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const { state } = useLocation();
  const data = state;
  console.log("staete", state);
  return (
    <div>
      <ul>
        <span>
          <input type="text" placeholder="Search...." />
          <button>
            <i
              style={{ color: "white" }}
              className="fa fa-search"
              aria-hidden="true"
            ></i>
          </button>
        </span>

        <span className="nav-name">
          <li style={{ display: "flex" }}>
            <img
              src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png"
              width="30px"
            ></img>
            <a href="contact.asp">{state.data.user}</a>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </span>
      </ul>
    </div>
  );
};

export default Navbar;
