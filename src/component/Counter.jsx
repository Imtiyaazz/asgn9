import React , { useState}from "react";

export const Counter =()=>{
    const [plus,setPlus]=useState(0)
    
    return(
        
        <div className="btn">
            <h1>Counter</h1>
            <button onClick={()=>setPlus(plus+1)}>+</button>
            <button className="hgt" style={{backgroundColor:"cadetblue"}}>{plus}</button>  
            <button onClick={()=>setPlus(plus-1)}>-</button>
              
        </div>
        )
}