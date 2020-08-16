import React,{useState} from 'react';
import './App.css';

function App() {
  let [isMorning,setMorning]=useState(true);
  return (
    <div className={`box ${isMorning?'isDay':''}`}>
      <h1>Good {isMorning?'Morning':'Night'}</h1>
      <button onClick={()=> setMorning(true)}>Day</button>
      <button onClick={()=> setMorning(false)}>Night</button>
    </div>
  );
}

export default App;
