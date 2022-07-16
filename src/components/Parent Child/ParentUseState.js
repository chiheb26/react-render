import React,{useState} from 'react'
import { Child } from './Child';

export const ParentUseState = () => {
    const [count, setCount] = useState(0)
    console.log("ParentUseState Render");
  return (
    <div>
        <button onClick={()=>setCount(c=>c+1)} > Count - {count} </button>
        <button onClick={()=>setCount(0)} > Count to 0 - {count} </button>
        <button onClick={()=>setCount(5)} > Count to 5 - {count} </button>
        <Child />
    
        
    </div>
  )
}
