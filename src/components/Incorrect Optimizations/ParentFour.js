import React,{useState,useMemo,useCallback} from 'react'
import { MemoizedChildFive } from './ChildFive';

export const ParentFour = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Name1")
    const person = {fname:'Bruce',lname:'Lee'}
    const memoizedPerson = useMemo(()=>person,[])
    const handleClick = () => {}
    const memoizedHandleClick = useCallback(handleClick,[])
    console.log("ParentFour Render");
    // if the component has objects or functions and you are wrapping one of its child components
    // with React.memo, it is an incorrect usage of memoization 
    return (
    <div>
        <button onClick={()=>setCount(c=>c+1)} > Count - {count} </button>
        <button onClick={()=>setName("Name2")} > Change Name </button>
        {/*<MemoizedChildFive name={name} person={person}/> */}
        <MemoizedChildFive name={name} handleClick={memoizedHandleClick}person={memoizedPerson}/>

    </div>
  )
}
