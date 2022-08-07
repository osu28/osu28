import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";



export const Navbar = () => {
    const [pageNum, setCount] = useState(0);
    return (
        <div className="Navbar">
            <div className="logo">
                <img src={require("../assets/oscar_fav.png")} className='fav'></img>
            </div>
            <div className="buttons">
                <button class="button-27" role="button" onClick={() => setCount(0)}>Home</button>
                <button class="button-27" role="button" onClick={() => setCount(1)}>About</button>
                <button class="button-27" role="button" onClick={() => setCount(2)}>Work</button>
                <button class="button-27" role="button" onClick={() => setCount(3)}>Projects</button>
                {/* <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/work" className="nav-link">Work</NavLink>
                <NavLink to="/projects" className="nav-link">Projects</NavLink> */}
            </div>
        </div>
    );
  };