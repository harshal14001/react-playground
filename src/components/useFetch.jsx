import { useState,useEffect } from "react";

const useFetch = (url) =>{
    const[data,setdata] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>setdata(data));
    },[]);
    return [data];
};
export default useFetch;  





// import './index.css';
// import useFetch from './components/useFetch';

// const App = () => {
  
//   const [data] = useFetch("https://jsonplaceholder.typicode.com/posts")
  
//   return(
//     <div>
//         {data && data.map((item)=>{
//           return <p>{item.id}</p>
//         })}
//     </div>
//   );
// };
// export default App;