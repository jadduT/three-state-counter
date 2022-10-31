import React,{useState} from 'react'
import './App.css';

function App(){
  const [count,setCount] = useState(0);


  const incrementCount =() =>{
    if (count >10){
      alert("cannot Increment counter greater than 11")
      return ""
    }else{
      setCount(count+1) 
    }
    
  }

  const decrementCount =() =>{
    if(count <1){
      window.alert("cannot decrement counter in negative.")
    }else{
      setCount(count -1);
    }
  }

  function resetCount(){
    return(setCount(0))
  }
  return (
    <div className='App'>
      <h1>Counter := {count}</h1>
      <button onClick={incrementCount}> + </button>
      <button onClick={decrementCount}> - </button>
      <button onClick={resetCount}> reset </button>
    </div>
  );
}

export default App;