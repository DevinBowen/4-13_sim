import React, { Component } from 'react';
import { connect } from "react-redux";
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return state;
}
// 43C 43H
export default connect( mapStateToProps )( App );
