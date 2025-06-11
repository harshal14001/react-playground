// from task 3:00:00

import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
  const [dataa, setdataa] = useState([]);

  useEffect(() => {
    async function getDataa() {
      const responsee = await fetch("https://jsonplaceholder.typicode.com/posts");
      const dataa = await responsee.json();

      if(dataa && dataa.length) setdataa(dataa);
    }

    getDataa();
  },[])

  return ( 
    <div>
        {dataa.map(posts=>(
          <ol key={posts.id} >{posts.title}</ol>
        ))}
    </div>
  )
}

export default FetchDataEffect