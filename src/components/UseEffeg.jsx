import React, { useEffect, useState } from 'react'

const UseEffeg = () => {
  const[valuee,setvaluee] = useState(0);  /* 1 */ 
  const[other,setother] = useState(0);    /* 2 */ 

  useEffect(()=>{
    console.log("call useEffect");
    document.title = `Increment ${valuee}`;
    // document.title = `Increment ${other}`;
  },[valuee,other])


  return (
    <div>
      <h2>{valuee}</h2>
      {/* <h2>{other}</h2> */}
      <button onClick={()=>setvaluee(valuee+1)}>click me for valuee</button>
      <button onClick={()=>setother(other+1)}>click me for other</button>
    </div>
  );
}

export default UseEffeg;