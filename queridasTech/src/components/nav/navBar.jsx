import { Link } from "react-router-dom";
import Autocomplete from "./autocomplete";
import React from "react";
import './navbar.css'

function Nav( ){
    return(
        <div className="navbar">
            <h2>QueridasTech</h2>
            <Autocomplete />
            <div className="navItems">
                <ul>
                    <li><Link to='/home'> HOME</Link></li>
                    <li><Link>PODSCASTS</Link></li>
                    <li><Link>SOBRE NÓS</Link></li>
                </ul>
            </div>
        </div>
    )
}export default Nav;
