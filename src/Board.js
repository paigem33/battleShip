import React, { Component } from 'react';
import Squares from './Squares'
import './App.css';

export default class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      arr: []
    }
  }
  //create a loop looping through and pushing five random numbers into an empty array, then put those random numbers into the main array as indexes, then set them equal to bomb
  startGame = () => {
    let numOfSquares = 100
    let arr = []
    for(let i=0;i<numOfSquares;i++){
      arr.push('')
    }
    let arrShips = []
    for(let i=1;i<=5;i++){
      let num = Math.floor(Math.random()*100)
      arrShips.push(num)
    }
    console.log(arrShips)
    arr[arrShips] = "ship"
    this.setState({arr: arr})
    console.log(arr)
  }
  //method to get the id of the box clicked on determine if the value at that index is ship or not
  showValue = (e) => {
    let { arr } = this.state
    let id = e.target.id
    if(arr[id] === 'ship'){
      arr[id] = 'SHIP'
    this.setState({arr: arr})
    } else {
      arr[id] = "water"
      this.setState({arr: arr})
    }
  }
  
  //   startGame = () => {
  //   let random = Math.floor(Math.random()*10)
  //   let index = random
  //   let bombIndex = Math.floor(Math.random()*9)
  //   let spaces = ['','','','','','','','','']
  //   spaces[index] = "treasure"
  //   while(bombIndex === index){
  //     bombIndex = Math.floor(Math.random()*9)
  //   }
  //   spaces[bombIndex] = "bomb"
  //   console.log(spaces)
  //   this.setState({ spaces: spaces })
  // }
   componentWillMount(){
    this.startGame();
  }
  render(){
    const { arr } = this.state;
    return (
      <div className="board">
        {arr.map((value, index) => {
          return (<Squares showValue={this.showValue} id={index} arr={arr}/>);
        })
        }
      </div>
    );
  }
}
