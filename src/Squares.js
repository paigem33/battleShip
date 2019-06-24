import React, { Component } from 'react';
import './App.css';

export default class Squares extends Component {
  // constructor(props){
  //   super(props)

  //   }
  render(){
    const { showValue, id, arr } = this.props
    return (
      <div className="squares" onClick={showValue} id={id}>{arr[id]}</div>
    );
  }
}
