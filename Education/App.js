// React function component to render a list of class names

function ClassList() {
  const classes = [
    { "img": "./basketball.png", "description": "I like to play"},
    { "img": "traveling.png", "description": "I like to play"},
    { "img": "gym.png", "description": "I like to play"},
    { "img": "photography.png", "description": "I like to play"}
  ]
  
  
  return (
    <div className="container">
      
          {classes.map((className, index) => (
              <div className="card" key={index}>
                <img src={className.img}></img>
                <div>{className.description}</div>
              </div>
          ))}
      
      </div>
  );
}

// Render the ClassList component in the 'app' div
ReactDOM.render(<ClassList />, document.getElementById('app'));


/*
import inventoryData from "./slideshow.json";
import React, { Component } from "react";

class Slider extends Component{
    render() {
        return (
            inventoryData.map((item) => (
                <p class="Slider">
                    <li>
                        <p>SKU: {item.description}</p>
                    </li>
                </p>
            )) 
        );
    }
}

export default Slider;
*/