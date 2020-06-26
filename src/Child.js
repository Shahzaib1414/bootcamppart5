import React, { useContext } from 'react';
import counterContext from './CounterContext.js';
function Child(){
    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return(
        
       <div>
           <h1> This is the first child </h1>
           <h3> CounterValue is : {counterValue[0]} </h3>
           <button onClick = {() => {counterValue[1](++counterValue[0])}}
           >update count</button>
           
        </div>
    
    )

}
export default Child;