// React function component to render a list of class names
import React from 'react';
import './App.css';

function ClassList() {
  const classes = ['Biology', 'Chemistry', 'Physics', 'Mathematics'];
  
  return (
    <div className="container">
      
          {classes.map((className, index) => (
       
              <div className="card" key={index}>{className}</div>
          ))}
      
      </div>
  );
}

// Render the ClassList component in the 'app' div
ReactDOM.render(  <React.StrictMode><ClassList /></React.StrictMode>, document.getElementById('app'));