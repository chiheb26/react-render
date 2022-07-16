import React from 'react'

export const ChildThree = ({name}) => {
    console.log('ChildThree Render');
  return (
    <div>{children} {name}</div>
  )
}

export const MemoizedChildThree = React.memo(ChildThree)