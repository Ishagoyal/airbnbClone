import React, {Component} from 'react';
import data from './data.json';
import {Link, BrowserRouter as Router,Route} from 'react-router-dom'; 
import About from './about.js'


 var rows = data.map((row) => 
    <Router>
    	<div className="Display-items">
    		<li> 
        		<Link to="/about" onClick={handleClick.bind(this,row)} target="_blank">{row.name}
        		</Link> 
        		&nbsp; &nbsp;  
        		{row.price} 
        		&nbsp; &nbsp; 
        		<img src = {row.image} height="50" width="50" alt="Preview"/>
        	</li>
    		<div>
     			<Route path='/about' component={About}/>
     		</div> 
     	</div>	
    </Router>
 );

  function handleClick(row,e) {
    e.preventDefault();
    console.log(row.name, 'was clicked');
  }

 function RenderList(rows){
    return(
		<div>
        	<li> Name &nbsp; &nbsp; Price &nbsp; &nbsp; Picture </li>
        	{rows}
        </div>
    );    
  }

class Home extends Component{
	render(){
		return(
			<div>
				{RenderList(rows)}
			</div>
		);
	}
}

export default Home;
