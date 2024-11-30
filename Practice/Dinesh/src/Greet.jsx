import react, { useState } from 'react';
import './Greet.css';

export function Greet(){
    return <h1>Dinesh Reddy</h1>
}
export const Farewell = () =>{
    return <h1>Good Bye from Functional Component</h1>
}
export default Greet;

export function Clickdemo(){
    const[count,setCount]=useState(0);

    const incrementHandler = ()=>{
        setCount(count+1);
    }

    const decrementHandler = ()=>{
        setCount(count-1);
    }
    const getColor = () =>{
        return count%2===0?"green":"red"
    }
    const getColor1 = () =>{
        return count%2===0?"red":"green"
    }
     return(
        <>
        <div className="wrapper"></div>
        <h2 style={{ backgroundColor: getColor() ,color:getColor1()}}>Count: {count}</h2>
        
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        </>
    )
}