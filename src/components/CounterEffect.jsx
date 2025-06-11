// from task 3:00:00


import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
    const[countt,setcount] = useState(0)

    useEffect(()=>{
        document.title = `Increment ${countt}`;
    },[countt])


  return (
    <div>
        <h2>{countt}</h2>
        <button onClick={()=>setcount(countt+1)}>increment count</button>
    </div>
  )
}

export default CounterEffect