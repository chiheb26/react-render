import React,{useState} from 'react'


const initState=['Bruce','Wayne']
export const ArrayUseState = () => {
    const [persons, setPersons] = useState(initState)
   
    const handleClick= () => {
     //   persons.push('Clark','Kent')
     //   setPersons(persons)
        const newPersons = [...persons]
        newPersons.push('Clark','Kent')
        setPersons(newPersons)
    }
    console.log('ArrayUseState Render');
  return (
    <div>
        <button onClick={handleClick}>Add Persons</button>
        {
            persons.map(p =>(
                <div key={p}>{p}</div>
            ))
        }
    </div>
  )
}
