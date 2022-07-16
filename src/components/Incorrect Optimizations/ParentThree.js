import React,{useState} from 'react'
import { MemoizedChildFour } from './ChildFour';

export const ParentThree = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Name1")
    console.log("ParentThree Render");
  return (
    <div>
        <button onClick={()=>setCount(c=>c+1)} > Count - {count} </button>
        <button onClick={()=>setName("Name2")} > Change Name </button>
        <MemoizedChildFour name={name} />
       {/*
        <MemoizedChildThree name={name}>
          <strong>Hello</strong>  
        </MemoizedChildThree>
       
        */}
         {/* props.children is always a new reference wich will cause the child component to always render
        so there is no need to wrap the child component with react.memo if the child component itself
        has children elements */}
    </div>
  )
}
