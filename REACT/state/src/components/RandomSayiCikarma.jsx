import React from 'react'
import { useState } from 'react'

const RandomSayiCikarma = () => {

    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

    const remove = () => {
        const newArray = [...numbers]
        const randomNumbers = Math.floor(Math.random() * newArray.length)
        const removed = newArray.splice(randomNumbers, 1)
        const newClear = newArray.filter((i) => i !== removed)
        setNumbers(newClear)

    }

    
    return (
        <div>
            <button onClick={remove}>REMOVE RANDOM NUMBER</button>
            <button onClick={()=>setNumbers([])}>REMOVE ALL NUMBER</button>
            <div>
                {numbers.length >0 ?
                numbers?.map((number) => <span>{number},</span>):"TÜM DİZİ SİLİNDİ"}
            </div>
        </div>
    )
}

export default RandomSayiCikarma