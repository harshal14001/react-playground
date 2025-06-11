import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'




// useEffect to fetch the dat a [jsonplacholder]
const FetchDataUseEff = () => {
    const[Data,setData] = useState([]);

    useEffect(()=>{
        async function getData() {
            const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
            const Data = await response.json();
            if(Data && Data.length) setData (Data);
        }

        getData();
    },[])

    return (
      <div>
        {Data.map(posts=>(
            <li key={posts.id}>{posts.title}</li>
        ))}
      </div>
    )
}

export default FetchDataUseEff