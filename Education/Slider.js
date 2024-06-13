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