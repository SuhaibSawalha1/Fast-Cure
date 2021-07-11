import React from "react"
import './App.css';
import logo from "./Fast-Cure.png"
import {Link} from "react-router-dom";

function Main() {
  return (
    <div>
      <img src={logo} className="logo"/>
      <p className="Welcome-P">
        Welcome everyone to FastCure
      </p>
      <p className="explain">
        If you have problems making reservations at hospitals to get to a certain doctor or if people just don't show up on time, so your reservation time changes FastCure will help you with those problems
      </p>
      <p className="explain">
        Type your sickness
      </p>
      <form className="Submit-box">
            <input type="text" name="name" className="Input-box"/>
            <br/>
            <br/>
            <Link to = "/Cancer">
              <input type="submit" value="Submit" className="Submit-button"/>
            </Link> 
        </form>
    </div>
  );
}

export default Main;


// npm install react-scripts@2.1.8