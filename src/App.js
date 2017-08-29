import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';



// const numbers = [1,2,3,4,5];

// const listItems = numbers.map((number) =>
//    <li>{number}</li>
//   );

// var data = [

//   {
//     "name": "Las Vegas",
//     "price" : "$5000"
//   },
//  {
//     "name": "London",
//     "price" : "$7000"
//   },

//   {
//     "name": "Paris",
//     "price" : "$9000"
//   },
//   {
//     "name": "Switzerland",
//     "price" : "$10000"
//   },
//   {
//     "name": "California",
//     "price" : "$15000"
//   },
//   {
//     "name": "Mumbai",
//     "price" : "$2000"
//   },
//   {
//     "name": "Japan",
//     "price" : "$12000"
//   },


// ];


var rows = data.map((row) =>
  <div className="Display-items">
   <li> {row.name} &nbsp; &nbsp;  {row.price}  <img src = {row.image}/></li>

   </div>
  );



class ListExample extends Component {

    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Initial code for airbnb clone.
        </p>
        <div>
        <li> Name &nbsp; &nbsp; Price &nbsp; &nbsp; Picture </li>
        {rows}
        </div>

      </div>
    );
  }
}

export default ListExample;
