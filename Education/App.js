// React function component to render a list of class names

import React, { Component } from "react";

class ClassList extends Component {
  render() {
    const classes = [
      { "img": "basketball", "description": "I like to play"},
      { "img": "traveling", "description": "I like to play"},
      { "img": "gym", "description": "I like to play"},
      { "img": "photography", "description": "I like to play"}
    ];
    
  
    return (
      <div className="container">
            {classes.map((className, index) => (
                <div className="card" key={index}>
                  <img key={image} src={require('./${image}.png')} clasName="my-img"></img>
                  <div>{className.description}</div>
                </div>
            ))}
        
        </div>
    );}
  }
  
  export default ClassList;


  

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