import React, { Component } from 'react';
import Board from './Board'
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      something: 0
    }
  }
  render(){
    return (
      <div className="app">
        <Board />
      </div>
    );
  }
}
