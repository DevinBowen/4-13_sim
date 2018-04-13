import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {

  render() {
    return (
      <div className="home">
        <div>
            {/* 54H 54J */}
            <div><Link to="/"><img src={require("../assets/logo.svg")} alt="logo"/></Link></div>
            <div><Link to="/">Menu</Link></div>
            <div><Link to="/">Cart</Link></div>
            <div>logout</div>
        </div>
        <div>

        </div>
      </div>
    );
  }
}
