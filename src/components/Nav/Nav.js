import React from 'react';
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";



const Nav = () => {




    const mystyle = {
        color: "white",
        backgroundColor: "#475ae2",
        borderColor:"white",
        color:"white",
        padding: "10px",
        fontFamily: "Arial",
        margin: "5px"
      }; 
    return (<nav className="navbar navbar-expand-lg navbar-light ">

<div className={classes.navbar}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

 

        <div className="collapse navbar-collapse" id="navbarNav">

            <Link to="/">
                <a class={`btn  active ${classes.btn} `}   href="#"  style={mystyle} role="button">Athlete</a>
            </Link>
            <Link to="/Food">
                <a class="btn btn-primary" href="#" style={mystyle}    role="button">Food</a>
            </Link>
            <Link to="/Music">
                <a class="btn btn-primary" href="#" style={mystyle}    role="button">Music</a>
            </Link>

           
        </div>
        </div>

    </nav>);
}

export default Nav;