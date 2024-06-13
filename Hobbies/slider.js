import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Fade} from 'react-slideshow-image'

//JSON for slideshow
const pictures = [
    { img: "basketball.png", description: 'I like to play'},
    { img: "traveling.png", description: 'I like to play'},
    { img: "gym.png", description: 'I like to play'},
    { img: "photography.png", description: 'I like to play'}
];

function slider() {
    return (
        <div class="container" id="container">
            <Fade>
                {pictures.map((image, num) => (
                    <div key={num}>
                        <div class="slide-image">
                            <img src="${image.img}"/>
                        </div>
                        <span class="description">
                            {image.description}
                        </span>
                    </div>
                ))}
            </Fade>
        </div>

    )
}