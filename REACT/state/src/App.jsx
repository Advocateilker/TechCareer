
import { useState } from 'react';
import './App.css';

function App() {

  const [size, setSize] = useState(200)
  const increase = () => {
    setSize(size + 100)

  }
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

  const [numbers, setnumbers] = useState([])
  const add = () => {
    const randomNumbers = Math.floor(Math.random() * 100)
    if (numbers.includes(randomNumbers)) {
      return
    } else {
      setnumbers([...numbers, randomNumbers])
    }


  }

  const change = () => {
    const randomNumbers = Math.floor(Math.random() * 10)
    setRandomColor(colors[randomNumbers])

  }
  return (
    <div className='app'>
      <div>
        <button onClick={change}>Change Color</button>
        <div style={{ backgroundColor: randomColor, height: 500, width: 500 }}></div>
      </div>




      <div>
        <button style={{ margin: "15px" }} onClick={increase}>Increase</button>
        <div style={{ height: size, width: size, backgroundColor: "black" }}></div>
      </div>

      <div>
        <button style={{ margin: "15px" }} onClick={add}>ADD</button>
        <ul>
          {numbers.map((number) => <li>{number}</li>)}
        </ul>
      </div>

    </div>

  );
}

export default App;
