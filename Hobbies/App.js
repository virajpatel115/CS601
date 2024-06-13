import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Fade} from 'react-slideshow-image'
import data from "./slideshow.json";


function App() {
    return (
        <div class="container">
            <Fade>
                {data.map((image, num) => (
                    <div key={num}>
                        <span class="description">
                            {image.description}
                        </span>
                    </div>
                ))}
            </Fade>
        </div>
    )
}

export default App;