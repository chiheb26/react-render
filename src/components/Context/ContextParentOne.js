import React, { useState } from 'react'
import { ChildA, MemoizedChildA } from './ContextChildrenOne';


export const CountContext = React.createContext()
const CountProvider = CountContext.Provider
export const ContextParentOne = ({children}) => {


    const [count, setCount] = useState(0)
    console.log('ContextParent Render');
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <CountProvider value={count}>
                {children}
            </CountProvider>
        </div>
    )
}
