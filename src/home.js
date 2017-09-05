import React from 'react';
import data from './data.json';
import {Link, BrowserRouter as Router,Route} from 'react-router-dom'; 
import About from './about.js'


 export var rows = data.map((row) => 
	<Router>
      <div className="Display-items">
        <li> <Link to="/about" onClick={handleClick.bind(this,row)} target="_blank">{row.name}</Link > &nbsp; &nbsp;  {row.price} &nbsp; &nbsp; <img src = {row.image} height="50" width="50" alt="Preview"/></li>
        <Route path='/about' component={About}/>
      </div>
     </Router>
      );


  function handleClick(row,e) {
    e.preventDefault();
    console.log(row.name, 'was clicked');
  }



 export function RenderList(rows){
    
      return(
        <div>
        <li> Name &nbsp; &nbsp; Price &nbsp; &nbsp; Picture </li>
        {rows}
        </div>
      ); 
      
  }


  