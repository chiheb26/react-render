import React,{useReducer} from 'react'

const initialState = 0
const reducer = (state,action) => {
    switch(action){
        case 'increment': return state+1
        case 'decrement': return state-1
        case 'reset': return initialState
        default: return state
    }    
}
export const UseReducer = () => {
  const [count,dispatch] = useReducer(reducer,initialState)
  console.log('UseReducer Render');
    return (
        <div>
            <div><h1>Count - {count}</h1></div>
            <div> <button onClick={()=>dispatch('increment')}>Increment</button></div>
            <div> <button onClick={()=>dispatch('decrement')}>Dercrement</button></div>
            <div> <button onClick={()=>dispatch('reset')}>Reset</button></div>
    </div>
  )
}
