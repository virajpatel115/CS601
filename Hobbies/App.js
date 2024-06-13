import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Fade} from 'react-slideshow-image'
import data from "./slideshow.json";

const myStyle = {
    display: 'flex',
    justifyContent: 'center',
    height: '20em'
}
const textStyle = {
    fontSize: "20px"
}

function App() {
    return (
        <div class="slide-container">
            <Fade>
                {data.map((image, num) => (
                    <div key={num}>
                        <div style={myStyle}>
                            <span class="description" style={textStyle}>
                                {image.description}
                            </span>
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    )
}

export default App;