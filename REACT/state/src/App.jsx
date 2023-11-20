
import { useState } from 'react';
import './App.css';

function App() {

  const [size, setSize] = useState(200)
  const increase = () => {
    setSize(size + 100)

  }

  const [numbers,setnumbers]=useState([])
const add =()=>{
  const randomNumbers=Math.floor(Math.random()*100)
  if(numbers.includes(randomNumbers)){
    return
  }else{
    setnumbers([...numbers,randomNumbers])
  }


}

  return (
    <>
      <div className="App">
        <button onClick={increase}>Increase</button>
        <div style={{ height: size, width: size, backgroundColor: "black" }}></div>
      </div>
      <div>
        <button onClick={add}>ADD</button>
        <ul>
          {numbers.map((number)=> <li>{number}</li> )}
        </ul>
        
      </div>

    </>

  );
}

export default App;
