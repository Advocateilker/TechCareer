import React from 'react'
import { useState } from 'react'


const RandomNumber = () => {
    const [numbers, setnumbers] = useState([])
    const add = () => {
        const randomNumbers = Math.floor(Math.random() * 100)
        if (numbers.includes(randomNumbers)) {
            return
        } else {
            setnumbers([...numbers, randomNumbers])
        }


    }
    return (
        <div>





            <div>
                <button style={{ margin: "15px" }} onClick={add}>ADD</button>
                <ul>
                    {numbers.map((number) => <li>{number}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default RandomNumber