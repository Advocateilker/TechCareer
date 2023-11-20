import React from 'react'
import { useState } from 'react'


const Size = () => {
    const [size, setSize] = useState(200)
    const increase = () => {
      setSize(size + 100)
  
    }
    return (
        <div>
            <div>
                <button style={{ margin: "15px" }} onClick={increase}>Increase</button>
                <div style={{ height: size, width: size, backgroundColor: "black" }}></div>
            </div>
        </div>
    )
}

export default Size