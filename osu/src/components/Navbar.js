import React from "react";
import { NavLink } from "react-router-dom";


export const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="column">
                <img src={require("../assets/oscar_fav.png")} className='fav'></img>
            </div>
            <div className="column"><p>.</p></div>
            <div className="buttons">
                <button class="button-27" role="button">Home</button>
                <button class="button-27" role="button">About</button>
                <button class="button-27" role="button">Work</button>
                <button class="button-27" role="button">Projects</button>
                {/* <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/work" className="nav-link">Work</NavLink>
                <NavLink to="/projects" className="nav-link">Projects</NavLink> */}
            </div>
            
        </div>
    );
  };