import React from 'react'
import { useState } from 'react';


const RandomColor = () => {
    

  const [randomColor, setRandomColor] = useState(null);

  const colors = ['red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'pink',
    'brown',
    'gray',]

 

  const change = () => {
    const randomNumbers = Math.floor(Math.random() * 10)
    setRandomColor(colors[randomNumbers])

  }
    return (
        <div>
            <div>
                <button onClick={change}>Change Color</button>
                <div style={{ backgroundColor: randomColor, height: 500, width: 500 }}></div>
            </div>

        </div>
    )
}

export default RandomColor