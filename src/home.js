import React from 'react';
import data from './data.json';


export var rows = data.map((row) => 
      <div className="Display-items">
        <li> <a href='./name.js/' onClick={handleClick.bind(this,row)} target="_blank">{row.name}</a> &nbsp; &nbsp;  {row.price} &nbsp; &nbsp; <img src = {row.image} height="50" width="50" alt="Preview"/></li>
      </div>
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


  